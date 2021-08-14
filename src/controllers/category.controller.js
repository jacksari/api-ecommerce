const { request, response } = require('express');
const serviceCategory = require('../services/category.service');

const createCategory = async (req = request, res = response) => {
    const body = req.body;
    try {
        const category = await serviceCategory.createCategory(body);
        res.json({
            category,
            ok: true
        })
    } catch (e) {
        console.log(e);
        res.json({
            msg: 'Error al crear categoría',
            ok: false
        })
    }
}

module.exports = {
    createCategory
}