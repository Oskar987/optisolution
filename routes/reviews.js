var express = require('express');
var router = express.Router();

router.get('/reviews', function(req, res, next) {
  res.render('reviews');
});

module.exports = router;
