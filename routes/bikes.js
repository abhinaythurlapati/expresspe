var express = require('express')
  , router = express.Router()
  , bikeRoutes = router.route('/')
var database = require("../databaseConnection");
var db1 = database.db1();

bikeRoutes.post(function (req, res) {
    res.write('hello bikes');
    console.log("bike routes was called");
    console.log(req.body);
    //res.write(req.body.operator);
	var coll = "logs";
					//var getlogs = db1.collection(coll);
				  	var getlogs = req.db.collection(coll);
					/*getlogs.insert({"hello" : "abhinay"},function(err,docs){
					if(err){console.log(err);}
					console.log(docs);
					console.log("write succesful from bikes")					
					}) */
					
					getlogs.find({},function(err,docs){
					if(err){console.log(err);}
					else{
					console.log("database response from bikes");
					console.log("content in database");
					console.log(docs);
					}					
					})
    res.end();
    //console.log("body successfully received");
});

module.exports = bikeRoutes
module.exports = router
