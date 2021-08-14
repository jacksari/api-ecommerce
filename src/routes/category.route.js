const { Router } = require('express');
const { 
    createCategory
} = require('../controllers/category.controller');
const { check } = require('express-validator');

const router = Router()

router.post(
    '/',
    createCategory
)

router.get(
    '/',
)

router.get(
    '/:id',
)

module.exports = router;