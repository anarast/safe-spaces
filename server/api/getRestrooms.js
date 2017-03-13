module.exports = function(req, res, next) {
  req.models('restroom').getRestrooms().then((restrooms) => res.send(restrooms));
}
