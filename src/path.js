const path = require('path');
const pathExists = require('path-exists');

module.exports = {
    hasVagrantSetup: function (p) {
        var vagrantFilePath = /Vagrantfile$/.test(p) ? p : path.join(p, 'Vagrantfile');
        return pathExists.sync(vagrantFilePath);
    },
    getPathOnly: function (p) {
        return /Vagrantfile$/.test(p) ? p.slice(0, -11) : p
    }
};
