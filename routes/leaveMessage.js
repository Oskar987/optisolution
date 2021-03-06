var express = require('express');
var router = express.Router();
var review = require('../models/message');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
 
var transporter = nodemailer.createTransport('smtps://mail%40artofbatik.ru:*****@smtp.yandex.ru');

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
        
        var mailOptions = {
            from: 'optisolution <mail@artofbatik.ru>', 
            to: 'pavelkononenko1@gmail.com', // list of receivers 
            subject: 'Сообщение с сайта optisolution.ru', 
            text: ' ', // plaintext body 
            html: '<p>'+ _message.createdAt +'</p><p> Email для связи: '+ _message.email +'</p><p> Описание работы: '+ _message.text +'</p><p> Откуда узнали(код) '+ _message.from +'</p>' 
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    });
});

module.exports = router;
