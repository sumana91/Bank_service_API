var bookshelf = require('../initialize');

var banks = bookshelf.Model.extend({
  tableName: 'banks'
});

module.exports = bookshelf.model('banks', banks);
