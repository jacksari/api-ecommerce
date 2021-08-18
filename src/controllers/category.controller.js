const serviceCategory = require('../services/category.service')
const { request, response } = require('express');
const { ErrorHandler } = require('../middlewares/error')
const slug = require('slug')
const fs = require('fs');
const { deleteFile } = require('../helpers/deleteFile');

const createCategory = async (req = request, res = response) => {
    const body = req.body;
    try {
        const categoryExists = await serviceCategory.getCategoryBySlug(slug(body.name));
        console.log(categoryExists);
        if(categoryExists) return ErrorHandler(req, res, 400, 'La categoria con ese nombre ya existe')
        const cat = {
            name: body.name,
            description: body.description,
            image: body.image
        }
        const category = await serviceCategory.createCategory(cat);
        res.json({
            category,
            ok: true
        })
        
    } catch (e) {
        console.log(e);
        ErrorHandler(req, res, 500, 'Error al crear categoría')
    }
}

const getCategoryTotal = async (req = request, res = response) => {
    try {
        
        const categories = await serviceCategory.getCategory();
        res.json({
            categories,
            ok: true
        })
    } catch (e) {
        console.log(e);
        ErrorHandler(req, res, 500, 'Error al listar categorías')
    }
}

const getCategoryById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const category = await serviceCategory.getCategoryById(id);
        if(!category) return ErrorHandler(req, res, 404, 'La categoria con ese id no existe')
        
        res.json({
            category,
            ok: true
        })
    } catch (e) {
        //console.log(e);
        ErrorHandler(req, res, 500, 'Error al listar categorías')
    }
}

const updateCategoryById = async (req = request, res = response) => {
    const { id } = req.params;
    const category = await serviceCategory.getCategoryById(id);
    try {
        if(!category) return ErrorHandler(req, res, 404, 'La categoria con ese id no existe')

        const newCategory = await serviceCategory.updateCategoryById(req.body, category._id);
        res.json({
            category: newCategory,
            ok: true
        })

    } catch (error) {
        console.log(error);
        ErrorHandler(req, res, 500, 'Error al actualizar categoría')
    }

}

const deleteCategoryById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        // Buscar si existe la categoria
        const category = await serviceCategory.getCategoryById(id);
        if(!category) return ErrorHandler(req, res, 404, 'La categoria con ese id no existe')
        //Eliminar imagen del servidor
        deleteFile(category.image);
        // Eliminar de la base de datos
        await serviceCategory.deleteCategoryById(category._id);
        res.json({
            msg: 'Categoría eliminada',
            ok: true
        })
    } catch (e) {
        //console.log(e);
        ErrorHandler(req, res, 500, 'Error al eliminar categorías')
    }
}

module.exports = {
    createCategory,
    getCategoryTotal,
    getCategoryById,
    deleteCategoryById,
    updateCategoryById
}