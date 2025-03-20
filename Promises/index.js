import { NotAvailable } from "./errors.js";
import { ExternalApi } from "./api.js";

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   *
   */
  free(text) {
    return this.api.fetch(text).then((result) => {
      return result.translation;
    });
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  batch(texts) {
    return new Promise((resolve, reject) => {
      if (texts.length === 0) {
        reject(new BatchIsEmpty()); // Ensure BatchIsEmpty is an instance of Error
      } else {
        const fetchPromises = texts.map((text) => this.api.fetch(text));

        Promise.all(fetchPromises)
          .then((results) => {
            const translations = results.map((result) => result.translation);
            resolve(translations);
          })
          .catch((err) => {
            reject(err); // Reject with the first encountered error
          });
      }
    });
  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  request(text) {
    return new Promise((resolve, reject) => {
      let attempts = 0;

      const tryRequest = () => {
        this.api.request(text, (err) => {
          if (!err) {
            resolve(); // Successfully requested translation
          } else if (attempts < 2) {
            attempts++;
            tryRequest(); // Retry if failed
          } else {
            reject(err); // Fail after 3 attempts
          }
        });
      };

      tryRequest(); // Start first attempt
    });
  }
  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  premium(text, minimumQuality) {
    const maxAttempts = 3;
    let attempts = 0;

    const fetchTranslation = () => {
      return this.api
        .fetch(text)
        .then(({ translation, quality }) => {
          if (quality < minimumQuality) {
            return Promise.reject(new QualityThresholdNotMet(text));
          }
          return Promise.resolve(translation);
        })
        .catch((err) => {
          if (err instanceof NotAvailable && attempts < maxAttempts) {
            attempts++;
            return this.request(text).then(fetchTranslation);
          }
          return Promise.reject(err);
        });
    };

    return fetchTranslation(); // Start the process
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
  The translation of ${text} does not meet the requested quality threshold.
      `.trim()
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
  Requested a batch translation, but there are no texts in the batch.
      `.trim()
    );
  }
}
