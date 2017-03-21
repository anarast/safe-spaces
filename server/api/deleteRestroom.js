var Restroom     = require('../models/restroom');

module.exports = function deleteRestroom(req, res) {
  Restroom.remove({
    _id: req.params.id
  }, function(err, restroom) {
    if (err)
      res.send(err);

    res.json({ message: 'Successfully deleted' });
  });
};
