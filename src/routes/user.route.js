const { Router } = require('express');
const { 
    createUser
} = require('../controllers/user.controller');
const { check } = require('express-validator');

const router = Router()

router.post(
    '/',
    createUser
)

router.get(
    '/',
)

router.get(
    '/:id',
)

module.exports = router;