var Restroom     = require('../models/restroom');

module.exports = function getRestrooms(req, res) {
	Restroom.find(function(err, restrooms) {
		if (err)
			res.send(err);

		res.json(restrooms);
	});
}
