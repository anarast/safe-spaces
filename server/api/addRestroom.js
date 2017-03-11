module.exports = function(req, res, next) {
  console.log(req.body);
  // req.models('restroom').add().then((restrooms) => res.send(restrooms))
}
