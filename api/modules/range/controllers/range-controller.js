var mongoose = require('mongoose');
var rangesSchema = require('../range-schema');
var _ = require('lodash');

function rangeOfCoins(req, res){
console.log("**************************")
   var body = _.get(req, 'body')   

   var rangeObj = new rangesSchema(body);
   rangeObj.save()
   	.then(function(data) {
   		console.log(data);
   		return res.send({result : data})   		
   	})
	.catch((error) => {
	  	console.log(error);
	  	return res.send({error : error});
	});
}

module.exports = {
	rangeOfCoins : rangeOfCoins
};