var knex = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING || 'postgres://postgres:pogo@localhost:5432/bank',
//  connection :process.env.PG_CONNECTION_STRING || 'postgres://postgres:qqqqqqqq@urbanhealth-postgres1.c1kglbwluguk.ap-south-1.rds.amazonaws.com:5432/doctor',

searchPath: 'knex,public'
});
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry')
module.exports = bookshelf;

//var bookshelf = require('bookshelf')(knex);
//bookshelf.plugin('registry')
//module.exports = bookshelf;
