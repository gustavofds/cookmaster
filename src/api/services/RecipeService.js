const RecipeModel = require('../models/RecipeModel');

class RecipeService {
    constructor() {
        this.model = new RecipeModel();
    }

    async list() {
        return this.model.list();
    }

    async getById(id) {
        return this.model.getById(id);
    }

    async create(recipe) {
        return this.model.save(recipe);
    }

    async update(recipe) {
        return this.model.update(recipe);
    }
}

module.exports = RecipeService;
