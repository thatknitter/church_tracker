//modules

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//configuration===================================

//config files
var db = require('./config/db');

//set port
var port = process.env.PORT || 8080;

//connect to mongoDB database (uncomment after credentials have been created in config/db.js)
//mongoose.connect(db.url);

//get all the stuff from the db POST parameters
//parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

//set static files location
app.use(express.static(__dirname + '/public'));

//routes===========================================

//configure routes
require('./app/routes')(app);

//start app =======================================
app.listen(port);

//signal app started
console.log('magic happens on port ' + port);

//expose app
exports = module.exports = app;