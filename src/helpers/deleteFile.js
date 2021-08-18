const fs = require('fs')

const deleteFile = (path) => {
    fs.unlink(path, function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File deleted!');
    });
}

module.exports = {
    deleteFile
}