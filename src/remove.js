const chalk = require('chalk');
const configstore = require('./configstore');

module.exports = function (name) {
    if (!configstore.has(name)) {
        console.error(chalk.red('This box is not registered with Vagrant Manager'));
    } else {
        configstore.del(name);
        if (!configstore.has(name)) {
            console.info(chalk.green('Box called \'%s\' was successfully removed from Vagrant Manager'), name);
        } else {
            console.error(chalk.red('We were not able to save the configuration file'));
        }
    }
};
