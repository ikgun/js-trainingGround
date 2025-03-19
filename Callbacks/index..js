import { notify } from "./notifier";
import { order } from "./grocer";

/**
 * @return void
 */
export function onSuccess() {
  // implement the onSuccess callback to call notify with a success message
  notify({ message: "SUCCESS" });
}

/**
 * @return void
 */
export function onError() {
  // implement the onError callback to call notify with an error message
  notify({ message: "ERROR" });
}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  // implement the orderFromGrocer function to order the query
  order(query, onSuccessCallback, onErrorCallback);
}

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export function postOrder(variety, quantity) {
  //implement the postOrder function to create a query and order
  order({ variety: variety, quantity: quantity }, onSuccess, onError);
}
