const connection = require('./connection');

const getByEmail = async (email) => {
  const db = await connection();

  const search = await db.collection('users').findOne({ email });
  console.log(search);
  return search;
};

const create = async (name, email, password) => {
  const db = await connection();

  const createNewUser = await db.collection('users')
  .insertOne({ name, email, password, role: 'user' });

  const { password: _, ...dataWithoutPassword } = createNewUser.ops[0];
  return { user: dataWithoutPassword };
};

const getByPassword = async (password) => {
  const db = await connection();

  const search = await db.collection('users').findOne({ password });
  return search;
};

module.exports = {
  getByEmail,
  create,
  getByPassword,
};