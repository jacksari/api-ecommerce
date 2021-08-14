const serviceCategory = require('../services/category.service')
const { request, response } = require('express');
const { ErrorHandler } = require('../middlewares/error')
const { v4: uuidv4 } = require('uuid');

const createCategory = async (req = request, res = response) => {
    const body = req.body;
    try {
        let fileImage = req.files.image;
        let myFileImage = fileImage.name.split('.');
        const fileTypeImage = myFileImage[myFileImage.length - 1];

        let nameFileImage = `${myFileImage[0]}-${uuidv4()}.${fileTypeImage}`;
        let pathFileImage = (`./src/public/images/categoryImages/` + nameFileImage)

        //console.log(pathFileImage);

        fileImage.mv(pathFileImage, async function(err) {
            if (err) return res.status(500).send(err);
    
            const cat = {
                name: body.name,
                description: body.description,
                image: pathFileImage
            }
            const category = await serviceCategory.createCategory(cat);
            res.json({
                category,
                ok: true
            })
          });
        
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

module.exports = {
    createCategory,
    getCategoryTotal
}