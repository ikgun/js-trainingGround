/**
 * The day rate, given a rate per hour
 *
 *
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */

export const WORKING_HOURS_PER_DAY = 8;

export function dayRate(ratePerHour) {
  return ratePerHour * WORKING_HOURS_PER_DAY;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (ratePerHour * WORKING_HOURS_PER_DAY));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 *
 *
 */

const BILLABLE_DAYS_IN_A_MONTH = 22;

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const totalBillableMonths = Math.floor(numDays / BILLABLE_DAYS_IN_A_MONTH);
  const remainingDays = numDays % BILLABLE_DAYS_IN_A_MONTH;

  const dailyRate = WORKING_HOURS_PER_DAY * ratePerHour;
  const monthlyRate = dailyRate * BILLABLE_DAYS_IN_A_MONTH;
  const discountedMonthlyRate = monthlyRate * (1 - discount);

  const remainingDaysCost = remainingDays * dailyRate;
  const totalMonthlyCost = totalBillableMonths * discountedMonthlyRate;
  return Math.ceil(totalMonthlyCost + remainingDaysCost);
}
