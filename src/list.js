const Table = require('cli-table');
const configstore = require('./configstore');

module.exports = function () {
    var table = new Table({
        head: ['Name', 'Path']
    });
    if (configstore.size > 0) {
        table.push(configstore.all);
    }
    console.log(table.toString());
};
