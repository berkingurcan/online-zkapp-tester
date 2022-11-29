const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');


const deleteFile = async (pathname, filename) => {
    const dirCodes = path.join(__dirname, pathname);

    if (!fs.existsSync(dirCodes)) {
        fs.mkdirSync(dirCodes, {recursive: true});
    }

    //const filename = "Add.ts";
    const filepath = path.join(dirCodes, filename);

    if(!filepath == undefined) {
        fs.unlinkSync(filepath);
        return filepath;
    }
};

module.exports = {
    deleteFile
}