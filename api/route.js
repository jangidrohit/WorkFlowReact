var coinController = require('./modules/coins/controllers/coin-controller');
var reportController = require('./modules/report/controllers/report-controller');

function setup(app){
    app.get('/api/coins', coinController.getCoinsDetails);
    app.get('/api/coins/:id', coinController.getCoinDetailsById);
    app.get('/api/coins/report', coinController.postReport);
    app.post('/api/coins/report', reportController.buySellCoins);
};

module.exports = {setup : setup};