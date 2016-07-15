//Declare necessary node modules 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//start server
var app = express(); 
var PORT = process.env.PORT || 80;

//included needed middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
//link routes
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);
//start server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});