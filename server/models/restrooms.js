var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

var restroomSchema = new Schema({
  id: {type: Number, ref: 'id', required: true},
  location: {
    street: String,
    city: String,
    latitude: Number,
    longitude: Number
  },
  comment: [String],
  created_at: Date,
  updated_at: Date,
  down_votes: Number,
  up_votes: Number,
})

restroomSchema.statics.getAll = () => {
  return Restroom.find().exec()
}

// restroomSchema.statics.add = () => {
//   return Restroom.insert().exec()
// }

// restroomSchema.statics.update = () => {
//   return Restroom.update()
// }

var Restroom = mongoose.model('restroom', restroomSchema);
