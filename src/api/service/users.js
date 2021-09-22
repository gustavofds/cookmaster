const jwt = require('jsonwebtoken');
const ModelUsers = require('../model/users');

const re = /\S+@\S+\.\S+/;

const util = (status, message) => ({ status, message });

const validateUser = (name, password, email) => {
  if (!name) return null;

  if (!email || !re.test(email)) return null;

  if (!password) return null;

  return true;
};

const validateEmailAndPassword = (email, password) => {
  if (!email) return null;

  if (!password) return null;

  return true;
};

const addUser = async (name, password, email) => {
  const role = 'user';
  const findEmail = await ModelUsers.findEmail(email);
  const validations = validateUser(name, password, email);

  if (findEmail) throw util(409, 'Email already registered');

  if (validations === null) throw util(400, 'Invalid entries. Try again.');

  const insert = await ModelUsers.addUser(name, password, email, role);

  return insert;
};

const findUser = async (email, password) => {
  const user = await ModelUsers.findUser(email, password);

  const validations = validateEmailAndPassword(email, password);

  if (!validations) throw util(401, 'All fields must be filled');

  if (!user) throw util(401, 'Incorrect username or password');

  const payload = { email, password };

  const token = jwt.sign(payload, 'Cookemaster');

  return token;
};

module.exports = {
  addUser,
  findUser,
};
