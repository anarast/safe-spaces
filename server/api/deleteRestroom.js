module.exports = function(req, res, next) {
	req.models('restroom').deleteRestroom(req.body.id, function() {
		res.send({success: true});
	});
}
