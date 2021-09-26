const recipeModel = require('../models/recipeModel');
const recipeValidations = require('../validations/recipeValidations');

const createRecipe = async (name, ingredients, preparation, userId) => {
  const validations = await recipeValidations.validate(name, ingredients, preparation);
  if (validations.message) return validations;

  const recipe = await recipeModel.createRecipe(name, ingredients, preparation, userId);
  return { recipe };
};

const listRecipes = async () => {
  const list = await recipeModel.listRecipes();
  return list;
};

module.exports = {
  createRecipe,
  listRecipes,
};