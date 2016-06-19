const Table = require('cli-table');
const configstore = require('./configstore');

module.exports = function () {
    var table = new Table({
        head: ['Name', 'Path']
    });

    for (var box in configstore.all) {
        table.push([box, configstore.get(box)]);
    }

    console.log(table.toString());
};
