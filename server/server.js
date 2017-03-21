// Module dependencies
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser')

// express app
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Port number
var port     = process.env.PORT || 3000;

// Connect to database
var mongoose   = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restroom_db');

// Express router
var router = express.Router();

// Test route
router.get('/', function(req, res) {
    res.json({ message: 'hello sara' });
});

// Routes
router.post('/restrooms', require('./api/addRestroom'));
router.get('/restrooms', require('./api/getRestrooms'));
router.get('/restrooms/:id', require('./api/getRestroomById'));
router.put('/restrooms/:id', require('./api/updateRestroom'));
router.delete('/restrooms/:id', require('./api/deleteRestroom'));

// Register routes
app.use('/api', router);

// Launch
app.listen(port);
console.log('Listening on port: ' + port);
