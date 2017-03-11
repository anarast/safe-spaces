var mongoose     = require('mongoose');
// var autoIncrement = require('mongoose-auto-increment');

var config = require('./dbconfig');

mongoose.connect(config.DBHost)

require('./restrooms')

console.log("Database created!");

module.exports = mongoose
