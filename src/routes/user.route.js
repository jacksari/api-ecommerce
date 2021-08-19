const { Router } = require('express');
const {
    createUser,
    getUserById,
    getUserBySlug,
    getUsersByEmailOrName,
    deleteUserById,
    updateUserById
} = require('../controllers/user.controller');
const { check } = require('express-validator');

const router = Router();

router.post(
    '/',
    createUser
)

router.get(
    '/id/:id',
    getUserById
)

router.get(
    '/slug/:slug',
    getUserBySlug
)

router.get(
    '/email',
    getUsersByEmailOrName
)

router.put(
    '/:id',
    updateUserById
)

router.delete(
    '/:id',
    deleteUserById
)

module.exports = router;
