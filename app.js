var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var logger = require('morgan')
var passport = require('passport')
var port = process.env.PORT || 8899

//Controllers
var bank = require('./controllers/bankcontroller');
var branch = require('./controllers/branchcontroller');


var app = express();

var cons = require('consolidate');

// view engine setup
app.engine('html', cons.swig);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'html');


app.use(logger('dev'))
app.use(bodyParser.json(bodyParser.urlencoded({ extended: false})))
app.use(cookieParser())
//app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'static_files')))

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/',function(req, res){
  res.send("hello")
})

app.use('/bank',bank)
app.use('/branch',branch)

app.listen(port, function (){
	console.log("Listening on", port)
})


app.use(function (err, req, res, next) {

	if (res.headersSent) {
    	return next(err)
  	}
  	console.log("Error Occured !!")
  	console.log(err)
  	res.status(500)
  	res.render('error', { error: err })

})
