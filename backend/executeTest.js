const {exec} = require('child_process');

const executeTest = async () => {
    return new Promise((resolve, reject) => {
        exec(
            `cd repo && cd module0 && npm run test && cd .. && cd ..`,
            (error, stdout, stderr) => {
                error && reject({ error, stderr });
                stderr && reject(stderr);
                resolve(stdout);
            }
        );
    });
};

module.exports = {
    executeTest,
};