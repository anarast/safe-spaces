module.exports = function() {

  var mongoose = require('mongoose');
  var config = require('./dbconfig');

  // connect to database
  var connection = mongoose.createConnection(config.DBHost)

  return {
    add: function(data, callback) {
      var date = new Date();
      data.id = crypto.randomBytes(20).toString('hex');
      data.date = date.getFullYear() + "-" + date.getMonth() + "-" +
        date.getDate();
      collection.insert(data, {}, callback || function() {});
    },
    update: function(data, callback) {
      collection.update(
        {ID: data.id},
        data,
        {},
        callback || function(){ }
      );
    },
    get: function(callback) {
      collection.find({}).toArray(callback);
    },
    remove: function(id, callback) {
      collection.findAndModify(
        {ID: id},
        [],
        {},
        {remove: true},
        callback
      );
    }
  }
}
