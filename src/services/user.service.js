const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createUser = async (user) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const resp = await User.create({
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        password: bcrypt.hashSync(user.password, salt),
        role: 'user_role',
        status: 'inactive',
        address: user.address,
        phoneNumber: user.phoneNumber,
        created_at: new Date,
        updated_at: new Date
    })
    return resp;
} 


module.exports = {
    createUser
}