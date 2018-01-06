var coinController = require('./modules/coins/controllers/coin-controller');

function setup(app){
    app.get('/api/coins', coinController.getCoinsDetails);
    app.get('/api/coins/:id', coinController.getCoinDetailsById);
    app.get('/api/coins/report', coinController.postReport);
};



module.exports = {setup : setup};