const express = require('express');
const verifyToken = require('../auth/verifyToken');
const { createRecipe, getAllRecipes,
  getRecipeById, editRecipe, deleteRecipe } = require('../controllers/recipesControllers');

const router = express.Router();

router.post('/', verifyToken, createRecipe);
router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.put('/:id', verifyToken, editRecipe);
router.delete('/:id', verifyToken, deleteRecipe);

module.exports = router;
