module.exports = function(req, res, next) {
  req.models('restroom').addRestroom(req.body, function() {
    res.send({success: true});
  });
}
