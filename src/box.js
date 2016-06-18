const spawn = require('child_process').spawn;
const configstore = require('./configstore');

module.exports = function (box, cmd) {
    process.stdin.pause();
    process.stdin.setRawMode(false);

    var options = {
            "cwd": configstore.get(box),
            'stdio': 'inherit'
        },
        proc = spawn('vagrant', [cmd], options);

    return proc.on('exit', function () {
        process.stdin.setRawMode();
        process.stdin.resume();
        return process.exit();
    });
};
