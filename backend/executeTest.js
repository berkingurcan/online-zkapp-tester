const {exec, spawn, execSync} = require('child_process');
const {fs} = require('fs');
const { cwd, stderr } = require('process');

const executeTest = async () => {
    return new Promise((resolve, reject) => {
        const child = spawn('npm', ['run', 'test'], {cwd: './repo/module0'});
        child.stdout.on('data', (data) => {
            console.log(data.toString())

            resolve(data.toString())
        })
    })

    /* try {
        const result = execSync('npm test -- --verbose=true', {cwd: './repo/module0'}, (error, stderr, stdout) => {
            return stderr
        })
        console.log();
        return result.toString()
    } catch(err) {
        console.log(err)
        return err
    } */
};

module.exports = {
    executeTest,
};