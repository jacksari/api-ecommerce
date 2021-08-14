const { Router } = require('express');
const { 
    createSubCategory
} = require('../controllers/subcategory.controller');
const { check } = require('express-validator');

const router = Router()

router.post(
    '/',
    createSubCategory
)

router.get(
    '/',
)

router.get(
    '/:id',
)

module.exports = router;