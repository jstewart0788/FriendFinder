//import required tools
var friendData 	= require('../data/friends.js');
var path = require('path');

module.exports = function(app){
	//retrieves friend data
	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});
	//alows user to add himself to friend database
	app.post('/api/friends', function(req, res){
			var user = req.body;
			//will than perform a search for the best friend possible
			var location = 0; //start searching at position 1
			var curDif = 99;//max difference
			friendData.forEach(function(data, friendPos){ // for each firend in the database
				var dif = 0; //reset the difference for each friend
				data.scores.forEach( function(score, iter)
				{
					//calculate the difference between the user and the potential best friend
					dif += Math.abs(parseInt(score) - parseInt(user.scores[iter]));

				});
				//if the difference is less than the current smallest difference, YOUVE FOUND A NEW FRIEND!
				if(dif < curDif)
				{
					location = friendPos;
				}
			});
			//update friend data and push result to webpage
			friendData.push(user);
			console.log(friendData[location]);
			res.json(friendData[location]);
	});

};