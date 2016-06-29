var friendData 	= require('../data/friends.js');
var path = require('path');

module.exports = function(app){

	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});

	app.post('/api/friends', function(req, res){

			var user = req.body;
			var location = 0;
			var curDif = 99;
			friendData.forEach(function(data, friendPos){
				var dif = 0;
				data.scores.forEach( function(score, iter)
				{
					dif += Math.abs(parseInt(score) - parseInt(user.scores[iter]));

				});

				if(dif < curDif)
				{
					location = friendPos;
				}
			});
			friendData.push(user);
			console.log(friendData[location]);
			res.json(friendData[location]);
	});

};