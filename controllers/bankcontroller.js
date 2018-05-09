var express = require('express');
var router = express.Router();
var bank = require('../db/models/bank');


//get all asanas
router.get('/', function(req,res, next){

  bank
  .fetchAll()
  .then(function (collection) {
    res.json({error: false, data: collection.toJSON()});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
})

module.exports = router;
