/// <reference path="./global.d.ts" />
//
// @ts-check

export const MARGHERITA_PRICE = 7;
export const CAPRESE_PRICE = 9;
export const FORMAGGIO_PRICE = 10;
export const EXTRA_SAUCE_PRICE = 1;
export const EXTRA_TOPPINGS_PRICE = 2;

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let pizzaPrice = 0;
  if (pizza === "Margherita") pizzaPrice = MARGHERITA_PRICE;
  if (pizza === "Caprese") pizzaPrice = CAPRESE_PRICE;
  if (pizza === "Formaggio") pizzaPrice = FORMAGGIO_PRICE;
  let amountOfExtraSauce = 0;
  let amountOfExtraToppings = 0;
  for (const extra of extras) {
    if (extra === "ExtraSauce") amountOfExtraSauce++;
    if (extra === "ExtraToppings") amountOfExtraToppings++;
  }
  let totalPrice =
    pizzaPrice +
    amountOfExtraSauce * EXTRA_SAUCE_PRICE +
    amountOfExtraToppings * EXTRA_TOPPINGS_PRICE;
  return totalPrice;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let totalOrderPrice = 0;
  pizzaOrders.forEach((pizzaOrder) => {
    totalOrderPrice += pizzaPrice(pizzaOrder.pizza, ...pizzaOrder.extras);
  });

  return totalOrderPrice;
}
