module.exports = function spawnProcess(command, options) {
    return new Promise((resolve, reject) => {
      const args = typeof command === "string" ? command.split(" ") : command;
      const spawned = require("cross-spawn")(args.shift(), args, options);
      const output = [];
  
      spawned.stdout.on("data", (_data) => {
        const data = _data.toString();
        output.push(data);
        return data;
      });
  
      spawned.stderr.on("data", (_data) => {
        const data = _data.toString();
        output.push(data);
        return data;
      });
  
      spawned.on("close", (code) => {
        if (code === 0) {
          resolve(output.join(""));
        } else {
          reject(output.join(""));
        }
      });
  
      spawned.on("error", (err) => {
        reject(err);
      });
    });
  }
  