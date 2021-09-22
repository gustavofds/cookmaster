const recipesModel = require('../models/recipesModel');

const ERROR_INVALID_ENTRIES = { error: { status: 400, message: 'Invalid entries. Try again.' } };

// const entriesValidation = (name, ingredients, preparation) => {
//   if (!name || !ingredients || !preparation) return true;
//   return false;
// };

const createRecipe = async (name, ingredients, preparation, userID) => {
  if (!name || !ingredients || !preparation) {
    return ERROR_INVALID_ENTRIES; 
  } 
  const recipe = await recipesModel.createRecipe(name, ingredients, preparation, userID);
  console.log(recipe);
  return recipe;
};

module.exports = {
  createRecipe,
};