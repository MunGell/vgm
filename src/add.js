const chalk = require('chalk');
const configstore = require('./configstore');
const pathUtils = require('./path');

module.exports = function (name, vagrantpath) {
    vagrantpath = pathUtils.getPathOnly(vagrantpath);

    if (configstore.has(name)) {
        console.error(chalk.red('Box with name %s is already registered in %s'), name, configstore.get(name));
    } else if (!pathUtils.hasVagrantSetup(vagrantpath)) {
        console.error(chalk.red('There is no Vagrant setup in %s'), vagrantpath);
    } else {
        configstore.set(name, vagrantpath);
        if (configstore.has(name)) {
            console.info(chalk.green('Box called \'%s\' was successfully added to Vagrant Manager'), name);
        } else {
            console.error(chalk.green('We were not able to save the configuration file'));
        }
    }
};
