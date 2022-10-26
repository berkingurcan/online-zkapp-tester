const {exec, spawn} = require('child_process');
const {fs} = require('fs');
const { cwd } = require('process');

const executeTest = async () => {
/*     exec(`cd repo && cd module0 && touch result.txt && npm run test && cd .. && cd ..`, (error, stdout, stderr) => {
        if (error) {
            console.log(error.message);
            return;
        } 
        if(stderr) {
            console.log(stderr);
            return;
        }

        return stdout;
    }) */

    const child = spawn('npm', ['run', 'test'], {cwd: './repo/module0'});
    child.stdout.on('data', (data) => {
        console.log(data.toString())
    });

};

module.exports = {
    executeTest,
};