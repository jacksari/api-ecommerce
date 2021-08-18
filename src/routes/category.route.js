const { Router } = require('express');
const { 
    createCategory,
    getCategoryTotal,
    getCategoryById,
    deleteCategoryById,
    updateCategoryById
} = require('../controllers/category.controller');
const { check } = require('express-validator');
const fileUpload = require('express-fileupload');

const router = Router()

router.use(fileUpload());

router.post(
    '/',
    createCategory
)

router.get(
    '/',
    getCategoryTotal
)

router.get(
    '/:id',
    getCategoryById
)

router.delete(
    '/:id',
    deleteCategoryById
)

router.put(
    '/:id',
    updateCategoryById
)

module.exports = router;