const recipeModel = require('../models/recipeModel');
// const recipeService = require('../services/recipeService');

const HTTP_OK_STATUS = 200;
const HTTP_NO_CONTENT_STATUS = 204;
const HTTP_NOT_FOUND_STATUS = 404;
// const HTTP_UNAUTHORIZED_STATUS = 401;

const addImage = async (req, res) => {
  try {
    const { filename } = req.file;
    const { id } = req.params;
    const image = `localhost:3000/src/uploads/${filename}`;
    const response = await recipeModel.addPath(id, image);
    if (response === 1) {
    const updated = await recipeModel.getById(id);
    return res.status(HTTP_OK_STATUS).json(updated);
    }
    return res.status(HTTP_NO_CONTENT_STATUS).end();
  } catch (error) {
    return res.status(HTTP_NOT_FOUND_STATUS).json({ 
      Message: 'Sorry Our API is not working properly',
    });
  }
};

// const getById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const response = await recipeService.findById(id);

//     if (response.code) {
//       return res.status(HTTP_NOT_FOUND_STATUS).json({
//           message: 'recipe not found',
//       });
//   }
  
//     return res.status(HTTP_OK_STATUS).json(response);
//   } catch (error) {
//     return res.status(HTTP_NOT_FOUND_STATUS).json({ 
//       Message: 'Sorry Our API is not working properly',
//     });
//   }
// };

// const updateById = async (req, res) => {
//   try {
//     const { name, ingredients, preparation } = req.body;
//     const { id } = req.params;
//     const { user } = req;

//     const response = await recipeService.updateById(id, user, { name, ingredients, preparation });

//     if (response.code) {
//       return res.status(HTTP_UNAUTHORIZED_STATUS).json({
//           message: 'jwt malformed',
//       });
//   }
  
//     return res.status(HTTP_OK_STATUS).json(response);
//   } catch (error) {
//     return res.status(HTTP_NOT_FOUND_STATUS).json({ 
//       Message: 'Sorry Our API is not working properly',
//     });
//   }
// };

// const deleteById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { user } = req;

//     const response = await recipeService.deleteById(id, user);

//     if (response.code) {
//       return res.status(HTTP_UNAUTHORIZED_STATUS).json({
//           message: 'jwt malformed',
//       });
//   }
  
//     return res.status(HTTP_NO_CONTENT_STATUS).end();
//   } catch (error) {
//     return res.status(HTTP_NOT_FOUND_STATUS).json({ 
//       Message: 'Sorry Our API is not working properly',
//     });
//   }
// };

module.exports = {
  addImage,
  // getById,
};