const User = require('../../entities/User');
const createUserModel = require('./createUserModel');

const createUserService = async (userInfo) => {
    const user = new User(userInfo);
    const { _password, ...createdUser } = await createUserModel(user);
    return createdUser;
};

module.exports = createUserService;
