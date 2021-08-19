const { Router } = require('express');
const {
    upload,
    uploadAvatar
} = require('../controllers/upload.controller');
const { check } = require('express-validator');
const fileUpload = require('express-fileupload');

const router = Router()

router.use(fileUpload());

router.post(
    '/:type/:file',
    upload
)

router.post(
    '/avatar/:type/:file',
)

router.get(
    '/',

)

router.get(
    '/email/:email',

)

module.exports = router;
