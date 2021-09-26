const recepiesService = require('../services/recepiesService');
const recepiesModels = require('../models/recepiesModels');

const createRecepie = async (request, response) => {
  const { name, ingredients, preparation } = request.body;
  const userID = request.user;
  const create = await recepiesService.createRecepie(name, ingredients, preparation, userID);
  
  return response.status(201).json(create);
};

const showRecipes = async (_request, response) => {
  const recipes = await recepiesModels.showRecipes();
  return response.status(200).json(recipes);
};

const showRecipesByID = async (request, response) => {
  const { id } = request.params;
  const recipes = await recepiesModels.showRecipesByID(id);
  if (!recipes) return response.status(404).json({ message: 'recipe not found' });
  
  return response.status(200).json(recipes);
};

const updateRecipe = async (request, response) => {
  const { id } = request.params;
  const { _id, role } = request.user;
  const update = request.body;
  const recipe = await recepiesModels.updateRecipe(id, update, role, _id);
  if (recipe === null) return response.status(404).json({ message: 'recipe not found' });
  if (recipe === false) return response.status(401).json({ message: 'missing auth token' });
  return response.status(200).json(recipe);
};

module.exports = {
  createRecepie,
  showRecipes,
  showRecipesByID,
  updateRecipe,
};
