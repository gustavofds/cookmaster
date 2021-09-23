const Joi = require('joi');
const RecipeModel = require('../models/RecipeModel');

const schemaRecipe = Joi.object({
  name: Joi.required(),
  ingredients: Joi.required(),
  preparation: Joi.required(),
});

const errorHandling = (status, message) => ({
  status,
  message,
});

const create = async (name, ingredients, preparation, userId) => {
  const { error } = schemaRecipe.validate({ name, ingredients, preparation });

  if (error) {
    throw errorHandling(400, 'Invalid entries. Try again.');
  }

  const recipe = await RecipeModel.create(name, ingredients, preparation, userId);

  return recipe;
};

const getAll = async () => {
  const recipes = await RecipeModel.getAll();

  return recipes;
};

const getById = async (id) => {
  const recipe = await RecipeModel.getById(id);

  if (!recipe) throw errorHandling(404, 'recipe not found');

  return recipe;
};

const update = async (id, name, ingredients, preparation) => {
  const recipeUpdate = await RecipeModel.update(id, name, ingredients, preparation);

  return recipeUpdate;
};

const deleteRecipe = async (id) => {
  const recipe = await RecipeModel.deleteRecipe(id);

  return recipe;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteRecipe,
};