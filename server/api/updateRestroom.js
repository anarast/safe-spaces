var Restroom     = require('../models/restroom');

module.exports = function updateRestroom(req, res) {
	Restroom.findById(req.params.id, function(err, restroom) {

		if (err)
			res.send(err);

		restroom.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Restroom updated!' });
		});

	});
}
