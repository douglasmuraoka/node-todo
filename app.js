var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var app = express();

// Retrieves port from the environment variable 'PORT', setting 3000 as default
var port = process.env.PORT || 3000;

// Defines the directory to lookup static files
app.use('/assets', express.static(__dirname + '/public'));

// Defines the view engine (looks for ejs files for views)
app.set('view engine', 'ejs');

// Creates connection to the mongoDB
var connection = mongoose.connect(config.getDbConnectionString());

// Adds the controller to create seed data through /api/setupTodos
setupController(app);

// Adds the controller to create our RESTful API
apiController(app);

// Sets node to listen at previously defined port
app.listen(port);