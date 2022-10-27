const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');

const dirCodes = path.join(__dirname, "repo/module0");

const readReport = async () => {
    const filename = "output.txt";
    const filepath = path.join(dirCodes, filename);

    const report = fs.readFileSync(filepath)
    return report.toString();
};

module.exports = {
    readReport
}