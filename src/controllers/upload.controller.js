const { request, response } = require('express');
const { ErrorHandler } = require('../middlewares/error')

const { filePath } = require('../helpers/filPath');

const upload = async (req = request, res = response) => {
    try {
        let fileImage = req.files.image;
        let pathFileImage = filePath(fileImage, req.params.type, req.params.file)

        //console.log(pathFileImage);

        fileImage.mv(pathFileImage, async function(err) {
            if (err) return res.status(500).send(err);
            res.json({
                path: pathFileImage,
                ok: true
            })
          });
        
    } catch (e) {
        console.log(e);
        ErrorHandler(req, res, 500, 'Error al subir archivo')
    }
}

module.exports = {
    upload
}