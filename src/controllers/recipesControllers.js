const service = require('../services/recipesServices');
const model = require('../models/recipesModel');

const getAll = async (_req, res) => {
  const allRecipes = await model.getAll();
  return res.status(200).json(allRecipes);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const recipe = await model.getById(id);

  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }

  return res.status(200).json(recipe);
};

const create = async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  const { _id: userId } = req.user; // como envei o user inteiro, pego apenas o _id e dou outro nome
  console.log(userId);
  
  const createRecepie = await model.createRecepie(name, ingredients, preparation, userId);
  console.log(createRecepie);

  return res.status(201).json({});
};

const update = async (req, res) => {
  const { id } = req.params; // id da receita
  const { user } = req.user;

  const updateRecipe = await service.update(req.body, user, id);

  if (updateRecipe.message) return res.status(409).json(updateRecipe);
  // se createUser tiver um atributo/Chave com o valor message, quer dizer que deu erro, então retornamos res.status de erro

  return res.status(201).json(updateRecipe);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};