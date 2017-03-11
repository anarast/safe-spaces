// module dependencies
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser')
var port     = process.env.PORT || 3000;

// connect to database


// set up express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
var router = express.Router();
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
app.use('/api', router);

// launch
app.listen(port);
console.log('Listening on port: ' + port);
