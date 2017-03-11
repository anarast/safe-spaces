var mongoose     = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema       = mongoose.Schema;
var config = require('./dbconfig');

// connect to database
var connection = mongoose.createConnection(config.DBHost)

autoIncrement.initialize(connection)

var restroomSchema = new Schema({
  id: {type: Number, ref: 'id', required: true},
  location: {
    street: {type: String}, // Latitude always goes first!
    city: String,
    latitude: Number,
    longitude: Number
  },
  comment: String,
  created_at: Date,
  updated_at: Date,
  down_votes: Number,
  up_votes: Number,
})

restroomSchema.plugin(autoIncrement.plugin, 'Restroom')
var Restroom = mongoose.model('Restroom', restroomSchema);
module.exports = Restroom;

console.log("Database created!");
