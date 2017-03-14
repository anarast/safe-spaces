var mongoose     = require('mongoose');

var config = require('./dbconfig');

mongoose.connect(config.DBHost);

require('./restroom');

console.log("Database created!");

module.exports = mongoose;
