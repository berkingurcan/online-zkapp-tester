const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');

const dirCodes = path.join(__dirname, "repo/module0");

if (!fs.existsSync(dirCodes)) {
    fs.mkdirSync(dirCodes, {recursive: true});
}

const deleteReport = async () => {
    const filename = "output.txt";
    const filepath = path.join(dirCodes, filename);

    fs.unlinkSync(filepath);
    return filepath;
};

module.exports = {
    deleteReport
}