module.exports = function(req, res, next) {
  req.articles.updateRestroom(req.body, function() {
    res.send({success: true});
  });
}
