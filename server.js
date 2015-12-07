var http = require("http");
var express = require('express');
var app = express();
var router = express.Router()
var bodyParser = require("body-parser");
var server = require('./server');
var bikeRoutes = require('./routes/bikes');
var sync_data = require('./routes/synchronise');
var query = require('./routes/querydb.js');
//var database = require("../databaseConnection");
//var db1 = database.db1();
//var query = require('./routes/query');

//var expressMongoDb = require('express-mongo-db');
//app.use(expressMongoDb('mongodb://localhost/mobiledata'));



//app.use(bodyParser.json());
app.use(bodyParser.text());
//app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));
/*
app.post('/sync_data',function(req,res){
	res.write("sync data was called");
        res.end();
	console.log(req.body);

});
*/	
/*
app.get('/bikes',function(req,res){
	console.log("bikes was called");
	res.write("bikes was called");
        res.end();

});
*/
/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

*/


//apply the routes to our application

app.use('/bikes', bikeRoutes);
app.use('/sync_data',sync_data);
app.use('/query',query);
var server = app.listen(8888, function () {

	var host = server.address().address
	var port = server.address().port
	console.log("Server has started");
	console.log("listening at http://%s:%s", host, port);

});

