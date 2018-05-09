module.exports = {

  development: {
    client: 'postgresql',
  //  connection :process.env.PG_CONNECTION_STRING || 'postgres://postgres:qqqqqqqq@urbanhealth-postgres1.c1kglbwluguk.ap-south-1.rds.amazonaws.com:5432/doctor',
    connection: process.env.PG_CONNECTION_STRING || 'postgres://postgres:pogo@localhost:5432/bank',
    pool: {
      min: 2,
      max: 10
    }
  }

};
//module.exports = router;
