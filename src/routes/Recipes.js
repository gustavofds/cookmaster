const express = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const { validateEntries } = require('../middlewares/recipesValidations');
const Recipes = require('../controllers/Recipes');

const router = express.Router();

router.post('/', validateJWT, validateEntries, Recipes.create);
router.get('/', Recipes.getAll);
router.get('/:id', Recipes.getById);
router.put('/:id', validateJWT, Recipes.update);
router.delete('/:id', validateJWT, Recipes.remove);

module.exports = router;