/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const firstNumber = Number(array1.join(""));
  const secondNumber = Number(array2.join(""));
  return firstNumber + secondNumber;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const reversedValue = Number(String(value).split("").reverse().join(""));
  return value === reversedValue;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 *
 */
export function errorMessage(input) {
  if (String(input).trim() === "" || input === null || input === undefined)
    return "Required field";
  if (isNaN(Number(String(input))) || Number(String(input)) === 0)
    return "Must be a number besides 0";
  return "";
}
