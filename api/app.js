'use strict';

var mongoose = require('./mongoose');
var express = require('express');
var cronJob = require('./modules/cronjob/controllers/cronjob-controller');

// Initialize Models
module.exports.init = function init(callback) {
	mongoose.connect(function (db) {
		
	});
	cronJob.cronJobStart();
};

module.exports.start = function start(callback) {
	var _this = this;
	_this.init(function () {
    	app.listen(3000, function () {
    		console.log("start");
    	});
	});
};