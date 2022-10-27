const {exec, spawn} = require('child_process');
const {fs} = require('fs');
const { cwd } = require('process');

const executeTest = async () => {
    return new Promise((resolve, reject) => {
        const child = spawn('npm', ['run', 'test'], {cwd: './repo/module0'});
        child.stdout.on('data', (data) => {
            console.log(data.toString())

            resolve(data.toString())
        })
    })
};

module.exports = {
    executeTest,
};