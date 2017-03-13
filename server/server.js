// module dependencies
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser')

// port number
var port     = process.env.PORT || 3000;

// connect to database
var mongoose = require('./models');
mongoose.Promise = global.Promise;

// set up express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  req.models = mongoose.model.bind(mongoose)
  next();
});

// routes
app.get('/api/getRestrooms', require("./api/getRestrooms"));
app.post('/api/addRestroom', require("./api/addRestroom"));
app.post('/api/deleteRestroom', require("./api/deleteRestroom"));
app.post('/api/updateRestroom', require("./api/deleteRestroom"));

// launch
app.listen(port);
console.log('Listening on port: ' + port);
