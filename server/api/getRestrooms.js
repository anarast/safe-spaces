module.exports = function(req, res, next) {
  req.models('restroom').getAll().then((restrooms) => res.send(restrooms))
}
