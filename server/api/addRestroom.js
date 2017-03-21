var Restroom     = require('../models/restroom');

module.exports = function addRestroom(req, res) {

  var restroom = new Restroom();

  restroom.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Restroom created!' });
  });
}
