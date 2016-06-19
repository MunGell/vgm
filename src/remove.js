const chalk = require('chalk');
const configstore = require('./configstore');

module.exports = function (box) {
    if (!configstore.has(box)) {
        console.error(chalk.red('This box is not registered with Vagrant Manager'));
    } else {
        configstore.del(box);
        if (!configstore.has(box)) {
            console.info(chalk.green('Box called \'%s\' was successfully removed from Vagrant Manager'), box);
        } else {
            console.error(chalk.red('We were not able to save the configuration file'));
        }
    }
};
