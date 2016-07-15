//import required tools
var path = require('path');

module.exports = function(app){
	//friend finder test
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});
	//hopepage to start survey
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};