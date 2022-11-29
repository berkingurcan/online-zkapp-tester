const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');



const generateFile = async (format, code, pathname, filename) => {
    /* const jobId = uuid();
    const filename = `${jobId}.${format}`
    const filepath = path.join(dirCodes, filename); */

    const dirCodes = path.join(__dirname, pathname);

    if (!fs.existsSync(dirCodes)) {
        fs.mkdirSync(dirCodes, {recursive: true});
    }

    const filepath = path.join(dirCodes, filename);

    fs.writeFileSync(filepath, code);
    return filepath;
};

module.exports = {
    generateFile
}