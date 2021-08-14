const { Router } = require('express');
const { 
    createCategory,
    getCategoryTotal
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
)

module.exports = router;