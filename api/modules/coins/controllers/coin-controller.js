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


module.exports = {
	getCoinsDetails : getCoinsDetails
};