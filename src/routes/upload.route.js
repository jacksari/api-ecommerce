const { Router } = require('express');
const { 
    upload
} = require('../controllers/upload.controller');
const { check } = require('express-validator');
const fileUpload = require('express-fileupload');

const router = Router()

router.use(fileUpload());

router.post(
    '/:type/:file',
    upload
)

router.get(
    '/',
    
)

router.get(
    '/:id',
    
)

module.exports = router;