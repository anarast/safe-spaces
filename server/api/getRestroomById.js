var Restroom     = require('../models/restroom');

module.exports = function getRestroomById(req, res) {
  Restroom.findById(req.params.id, function(err, restroom) {
    if (err)
      res.send(err);
    res.json(restroom);
  });
}
