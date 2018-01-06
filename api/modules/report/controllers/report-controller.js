var mongoose = require('mongoose');
var reportSchema = require('../report-schema');
var _ = require('lodash');

function buySellCoins(req, res){
	console.log("**************************")
	return new Promise(function(resolve, reject) {
	   var body = _.get(req, 'body')   

	   var reportObj = new reportSchema(body);
	   reportObj.save()
	   	.then(function(res) {
	   		console.log(res);
	   		resolve(res)   		
	   	})
		.catch((error) => {
		  	console.log(error);
		  	reject(error)
		});
	})
}

module.exports = {
	buySellCoins : buySellCoins
};