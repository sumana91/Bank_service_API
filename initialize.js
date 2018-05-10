var knex = require('knex')({
  client: 'pg',
//  connection: process.env.PG_CONNECTION_STRING || 'postgres://postgres:pogo@localhost:5432/bank',
//  connection :process.env.PG_CONNECTION_STRING || 'postgres://postgres:qqqqqqqq@urbanhealth-postgres1.c1kglbwluguk.ap-south-1.rds.amazonaws.com:5432/doctor',
  connection: process.env.PG_CONNECTION_STRING || 'postgres://postgres:5e3fa46647ab0ced53a55638ba640d8a6cb6d1cf5e28ed5b7462591f35234fe5@ec2-23-23-180-121.compute-1.amazonaws.com:5432/deu928qe0qmgi9',
searchPath: 'knex,public'
});
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry')
module.exports = bookshelf;
