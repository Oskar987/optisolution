var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = mongoose.Schema({
    email: String,
    text: String,
    from: String,
    createdAt: Date
});

var message = mongoose.model('Message', messageSchema);

module.exports = message;