const spawnProcess = require("./spawnProcess");

const executeTest = async () => {
    /* return new Promise((resolve, reject) => {
        const child = spawn('npm', ['run', 'test'], {cwd: './repo/module0'});
        child.stdout.on('data', (data) => {
            console.log(data.toString())

            resolve(data.toString())
        })
    }) */

    try {
        const result = await spawnProcess("npm test --ci --no-color", {
          cwd: "./repo/module0",
        });
    
        return {status: true, result};
      } catch (err) {
        return {status: false, error: err};
      }
};

module.exports = {
    executeTest,
};