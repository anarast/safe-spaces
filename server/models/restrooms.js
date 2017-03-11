
var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

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

restroomSchema.statics.getAll = () => {
  return Restroom.find().exec()
}

var Restroom = mongoose.model('restroom', restroomSchema);


// {
//   get: function(callback) {
//     return Restroom.find({}).exec().then((data) => console.log(data));
//   }



// Restroom.getAll().then(console.log);

// return {
//   add: function(data, callback) {
//     var date = new Date();
//     data.created_at = date.getFullYear() + "-" + date.getMonth() + "-" +
//       date.getDate();
//     collection.insert(data, {}, callback || function() {});
//   },
//   update: function(data, callback) {
//     collection.update(
//       {ID: data.id},
//       data,
//       {},
//       callback || function(){ }
//     );
//   },
//   get: function(callback) {
//     collection.find({}).toArray(callback);
//   },
//   remove: function(id, callback) {
//     collection.findAndModify(
//       {ID: id},
//       [],
//       {},
//       {remove: true},
//       callback
//     );
//   }
// }
