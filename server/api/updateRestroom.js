module.exports = function(req, res, next) {
  req.models('restroom').updateRestroom(req.body, function() {
    res.send({success: true});
  });
}
