const User = require('../models/user.model');
const slug = require('slug')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createUser = async (user) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const resp = await User.create({
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        password: bcrypt.hashSync(user.password, salt),
        img: user.img,
        slug: slug(`${user.name} ${user.lastname}`),
        address: user.address,
        phoneNumber: user.phoneNumber,
        created_at: new Date,
        updated_at: new Date
    })
    return resp;
}

const getUserById = async (id) => {
    return await User.findById(id);
}

const getUserBySlug = async (slug) => {
    return await User.findOne({slug});
}

const getUsersByEmailOrName = async (email, limit = 10, page = 1) => {
    const regex = new RegExp(email, 'i');
    var options = {
        sort: { created_at: -1 },
        page,
        limit,
    };

    return await User.paginate({
        $or: [
            { email: regex },
            { name: regex },
            { lastname: regex }
        ]
    }, options);
}

const getUserOneByEmail = async (email) => {
    return await User.findOne({email: email})
}

const updateUserById = async (user, id) => {

    return await User.findByIdAndUpdate(id, user, {new: true});
}

const deleteUserById = async (id) => {
    return await User.findByIdAndDelete(id);
}

module.exports = {
    createUser,
    getUserById,
    getUserBySlug,
    getUsersByEmailOrName,
    updateUserById,
    deleteUserById,
    getUserOneByEmail
}
