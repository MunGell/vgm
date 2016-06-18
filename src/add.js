const configstore = require('./configstore');
const pathUtils = require('./path');

module.exports = function (name, vagrantpath) {
    vagrantpath = pathUtils.getPathOnly(vagrantpath);

    if (configstore.has(name)) {
        console.error('Box with name %s is already registered in %s', name, configstore.get(name));
    } else if (!pathUtils.hasVagrantSetup(vagrantpath)) {
        console.error('There is no Vagrant setup in %s', vagrantpath);
    } else {
        configstore.set(name, vagrantpath);
        if (configstore.has(name)) {
            console.info('Box called \'%s\' was successfully added to Vagrant Manager', name);
        } else {
            console.error('We were not able to save the configuration file')
        }
    }
};
