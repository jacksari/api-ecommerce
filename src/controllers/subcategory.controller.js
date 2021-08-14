const { request, response } = require('express');
const serviceSubCategory = require('../services/subcategory.service');

const createSubCategory = async (req = request, res = response) => {
    const body = req.body;
    try {
        const category = await serviceSubCategory.createSubCategory(body);
        res.json({
            category,
            ok: true
        })
    } catch (e) {
        console.log(e);
        res.json({
            msg: 'Error al crear Subcategoría',
            ok: false
        })
    }
}

module.exports = {
    createSubCategory
}