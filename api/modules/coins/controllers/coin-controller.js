var mongoose = require('mongoose');
var coinDetails = require('../../cronjob/cronjob-schema');

function getCoinsDetails(request, response){
    coinDetails.find({}, function(error, coinDetails){
        if(error){
            return response.send({error : error});
        }else{
            return response.send({result : coinDetails});
        }
    });
}

// getCoin Details By Dates between
function getCoinDetailsByDates(pid){

	coinSchema.findOne({id: pid}, function(err, res) {
		console.log(res);
		//logger.info("res2", res);
      });
}


module.exports = {
	getCoinsDetails : getCoinsDetails,
	getCoinDetailsByDates : getCoinDetailsByDates
};