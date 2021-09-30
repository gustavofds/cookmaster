const model = require('../models/Recipes');
const { NOT_FOUND, NO_CONTENT } = require('./Status');

const removeRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    const recipeRemoved = await model.removeRecipes(id);
    if (!recipeRemoved) return res.status(NOT_FOUND).json({ message: 'Not found recipes.' });

    res.status(NO_CONTENT).send();
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};

module.exports = {
  removeRecipe,
};