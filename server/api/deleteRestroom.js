module.exports = function(req, res, next) {
	req.articles.deleteRestroom(req.body.id, function() {
		res.send({success: true});
	});
}
