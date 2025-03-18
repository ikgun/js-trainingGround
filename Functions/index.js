/**
 * Explains the cooking status of lasagna.
 *
 * @param {number} remainingTime in mins
 * @returns {string} status of lasagna
 */
export function cookingStatus(remainingTime) {
  if (
    remainingTime === null ||
    remainingTime === undefined ||
    isNaN(remainingTime)
  )
    return "You forgot to set the timer.";
  if (remainingTime === 0) return "Lasagna is done.";
  return "Not done, please wait.";
}

/**
 * Calculates preparation time for lasagna
 *
 * @param {string[]} layers of the lasagna
 * @param {number} prepTime for each layer
 * @returns {number} estimated total prep time based on number of layers
 */
export function preparationTime(layers, prepTime = 2) {
  return layers.length * prepTime;
}

/**
 * Calculates total amount of noodles and sauce needed for lasagna
 *
 * @param {string[]} layers
 * @returns {object}
 */
export function quantities(layers) {
  let totalNoodleAmount = 0;
  let totalSauceAmount = 0;
  layers.forEach((element) => {
    if (element === "noodles") totalNoodleAmount++;
    else if (element === "sauce") totalSauceAmount++;
  });

  const totalNoodlesNeeded = totalNoodleAmount * 50;
  const totalSauceNeeded = totalSauceAmount * 0.2;

  return {
    noodles: totalNoodlesNeeded,
    sauce: totalSauceNeeded,
  };
}

/**
 * Adds friend's secret ingredient to my ingredient list
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
}

/**
 * Scales the recipe up to the desired portion
 *
 * @param {object} recipe for two portions
 * @param {number} portions amount to scale the recipe
 * @returns {object}
 */
export function scaleRecipe(recipe, portions) {
  let newRecipe = { ...recipe };

  for (const ingredient in newRecipe) {
    newRecipe[ingredient] *= portions / 2;
  }

  return newRecipe;
}
