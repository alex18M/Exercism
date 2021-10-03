
// Freelancer Rates

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
 const HoursPerDay = 8;
 const BillableDays = 22;
 export function dayRate(ratePerHour) {
   return ratePerHour * HoursPerDay;
 }
 /**
  * Calculates the rate per month
  *
  * @param {number} ratePerHour
  * @param {number} discount for example 20% written as 0.2
  * @returns {number} the rounded up monthly rate
  */
 export function monthRate(ratePerHour, discount) {
    let value = dayRate(ratePerHour) * BillableDays;
   return Math.ceil(applyDiscount(value, discount));
 }
 /**
  * Calculates the number of days in a budget, rounded down
  *
  * @param {number} budget the total budget
  * @param {number} ratePerHour the rate per hour
  * @param {number} discount to apply, example 20% written as 0.2
  * @returns {number} the number of days
  */
 export function daysInBudget(budget, ratePerHour, discount) {
    let value = budget / (1 - discount);
   return Math.floor(value / dayRate(ratePerHour))
 }
 /**
  * Applies a discount to the value
  *
  * @param {number} value
  * @param {number} percentage for example 20% written as 0.2
  * @returns {number} the discounted value
  */
 function applyDiscount(value, percentage) {
   let factor = 1.0 - percentage;
   return value * factor;
 }