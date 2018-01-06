var coinController = require('./modules/coins/controllers/coin-controller');
var reportController = require('./modules/report/controllers/report-controller');

function setup(app){
    app.get('/api/coins', coinController.getCoinsDetails);
    app.get('/api/coins/:id', coinController.getCoinDetailsById);
    app.post('/api/report', reportController.buySellCoins);
	app.get('/api/report', reportController.getReportCoins);
};

module.exports = {setup : setup};