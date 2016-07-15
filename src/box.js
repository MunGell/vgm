const spawn = require('child_process').spawn;
const configstore = require('./configstore');

module.exports = function (name, cmd) {
    cmd = cmd.length ? cmd : ['status'];

    process.stdin.pause();

    if (process.stdin.isTTY) {
        process.stdin.setRawMode(false);
    }

    var options = {
            "cwd": configstore.get(name),
            'stdio': 'inherit'
        },
        proc = spawn('vagrant', cmd, options);

    return proc.on('exit', function () {
        if (process.stdin.isTTY) {
            process.stdin.setRawMode();
        }
        process.stdin.resume();
        return process.exit();
    });
};
