var express = require('express');
var router = express.Router();

router.get('/prices', function(req, res, next) {
  res.render('prices');
});

module.exports = router;
