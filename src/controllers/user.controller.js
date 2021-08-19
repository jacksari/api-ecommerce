const { request, response } = require('express');
const serviceUser = require('../services/user.service');
const {deleteFile} = require("../helpers/deleteFile");
const {ErrorHandler} = require("../middlewares/error");

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
        ErrorHandler(req, res, 404, 'Error al crear usuario')
    }
}

const getUserById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const user = await serviceUser.getUserById(id);
        res.json({
            user,
            ok: true
        })
    } catch (e) {
        console.log(e);
        ErrorHandler(req, res, 500, 'Error al listar usuarios por id')
    }
}

const getUserBySlug = async (req = request, res = response) => {
    const { slug } = req.params;
    try {
        const user = await serviceUser.getUserBySlug(slug);
        res.json({
            user,
            ok: true
        })
    } catch (e) {
        console.log(e);
        ErrorHandler(req, res, 500, 'Error al listar usuario por slug')
    }
}

const getUsersByEmailOrName = async (req = request, res = response) => {

    const email = req.query.email || '';
    const limit = parseInt(req.query.limit, 10) || 10;
    const page = parseInt(req.query.page, 10) || 1;

    try {
        const users = await serviceUser.getUsersByEmailOrName(email, limit, page);
        res.json({
            users,
            ok: true
        })
    } catch (e) {
        console.log(e);
        ErrorHandler(req, res, 500, 'Error al listar usuarios')
    }
}

const updateUserById = async (req = request, res = response) => {
    const { id } = req.params;
    const user = await serviceUser.getUserById(id);
    try {
        if(!user) return ErrorHandler(req, res, 404, 'El usuario con ese id no existe')

        const { password, google, email ,...campos } = req.body;
        if( user.email !== email ){
            const existeEmail = await serviceUser.getUserOneByEmail( email );
            if( existeEmail ) {
                return  ErrorHandler(req, res, 400, 'Ya existe un usuario con ese correo')
            }
        }
        campos.updated_at = Date.now();
        campos.email = email;

        const newUser = await serviceUser.updateUserById(campos, user._id);
        res.json({
            category: newUser,
            ok: true
        })

    } catch (error) {
        console.log(error);
        return ErrorHandler(req, res, 500, 'Error al actualizar categoría')
    }

}

const deleteUserById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const user = await serviceUser.getUserById(id);
        if(!user) return ErrorHandler(req, res, 404, 'La categoria con ese id no existe')
        //Eliminar imagen del servidor
        deleteFile(user.img);
        // Eliminar de la base de datos
        await serviceUser.deleteUserById(user._id);
        res.json({
            msg: 'Usuario eliminado',
            ok: true
        })
    } catch (e) {
        console.log(e);
        ErrorHandler(req, res, 500, 'Error al eliminar usuario')
    }
}

module.exports = {
    createUser,
    getUserBySlug,
    getUserById,
    getUsersByEmailOrName,
    deleteUserById,
    updateUserById
}
