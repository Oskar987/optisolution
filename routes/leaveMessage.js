var express = require('express');
var router = express.Router();
var review = require('../models/message');
var mongoose = require('mongoose');


router.post('/leaveMessage', function(req, res) {
    var Message = mongoose.model('Message');
    var _message = new Message();
    _message.email = req.body.email;
    _message.from = req.body.from;
    _message.text = req.body.description;
    _message.createdAt = new Date();
    _message.save(function(err){
        if (err) throw err;
        console.log('Message saved.' + _message.email + _message.text);
    });
});

module.exports = router;
