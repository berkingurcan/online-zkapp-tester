const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');

const dirCodes = path.join(__dirname, "repo/module0/src");

if (!fs.existsSync(dirCodes)) {
    fs.mkdirSync(dirCodes, {recursive: true});
}

const deleteFile = async () => {
    const filename = "Add.ts";
    const filepath = path.join(dirCodes, filename);

    if(!filepath == undefined) {
        fs.unlinkSync(filepath);
        return filepath;
    }
};

module.exports = {
    deleteFile
}