function getCoinsDetails(request, response){
	
	  return response.send({result : 'from coins'});
}


module.exports = {
	getCoinsDetails : getCoinsDetails
};