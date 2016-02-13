var express = require('express');
var router = express.Router();

//post request handlers
router.post('/leaveMessage', function(req, res) {
    res.send(JSON.stringify(req.body));
    console.log(JSON.stringify(req.body));
});

module.exports = router;
