var express = require('express');
var router = express.Router();
var bank_branches = require('../db/models/bank_branches')


router.get('/ifsc', function(req,res, next){

       var ifsc = req.query.ifsc;
       var Branch = bank_branches.forge();

       Branch = Branch.query({where:{ ifsc:ifsc }});
       Branch
       .fetchAll()
       .then(function (collection) {
            res.json({data: collection.toJSON()});
        })
       .catch(function (err) {
          res.status(500).json({data: {message: err.message}});
        });
})

router.get('/', function(req,res, next){

        var bank_name = req.query.bank_name;
        var city = req.query.city;
        var Branch = bank_branches.forge();

        Branch = Branch.query({where:{ bank_name :bank_name, city:city }});
        Branch
        .fetchAll()
        .then(function (collection) {
          res.json({data: collection.toJSON()});
        })
        .catch(function (err) {
          res.status(500).json({data: {message: err.message}});
        });
})




module.exports = router;
