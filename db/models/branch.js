var bookshelf = require('../initialize');

var branches = bookshelf.Model.extend({
  tableName: 'branches'
});

module.exports = bookshelf.model('branches', branches);
