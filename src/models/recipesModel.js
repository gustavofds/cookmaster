const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  preparation: String,
  userId: String,
}, { versionKey: false });

module.exports = mongoose.model('recipes', recipeSchema);