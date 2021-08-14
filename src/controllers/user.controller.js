const { request, response } = require('express');
const serviceUser = require('../services/user.service');

const createUser = async (req = request, res = response) => {
    const body = req.body;
    try {
        const user = await serviceUser.createUser(body);
        res.json({
            user,
            ok: true
        })
    } catch (e) {
        console.log(e);
        res.json({
            msg: 'Error al crear usuario',
            ok: false
        })
    }
}

module.exports = {
    createUser
}