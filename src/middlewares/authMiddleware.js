const jwt = require('jsonwebtoken');

const UserModel = require('../models/UserModel');

const SECRET = 'superSecret';

const authLogin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const { email } = jwt.verify(token, SECRET);

    const user = await UserModel.findByEmail(email);

    req.user = user;

    next();
  } catch (_e) {
    res.status(401).json({ message: 'Invalid Token' });
  }
};

module.exports = {
  authLogin,
};