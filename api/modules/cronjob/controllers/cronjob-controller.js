var cron = require('node-cron');
var mongoose = require('mongoose');
var axios = require('axios');
var coinSchema = require('../cronjob-schema');

module.exports.cronJobStart = function (){
	cron.schedule('5 * * * * *', function () {
		console.log("started");
		getCoinDetails();
	});
};


function getCoinDetails(){
	axios.get('https://api.coinmarketcap.com/v1/ticker/')
	.then(response => {
		  console.log(" Old data deleting");
		  coinSchema.remove({}, function(err){
			console.log("data deleted");
			if(err){
				console.log(err);
				return;
			}
			else{
				console.log("new data saving");
				coinSchema.collection.insert(response.data);
				console.log("new data saved");
			}
		})
	})
	.catch(error => {
	  	console.log(error);
	});
}