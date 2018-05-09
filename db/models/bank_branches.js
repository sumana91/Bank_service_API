var bookshelf = require('../initialize');

var bank_branches = bookshelf.Model.extend({
  tableName: 'bank_branches'
});

module.exports = bookshelf.model('bank_branches', bank_branches);
