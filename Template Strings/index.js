/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */

export function buildBirthdaySign(age) {
  if (age >= 50) return "Happy Birthday! What a mature fellow you are.";
  return "Happy Birthday! What a young fellow you are.";
}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */

export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`;
}

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */

export function costOf(sign, currency) {
  const signChars = sign.split("");
  const charsCost = signChars.length * 2;
  const totalCost = 20 + charsCost;
  return `Your sign costs ${totalCost.toFixed(2)} ${currency}.`;
}
