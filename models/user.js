var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    firstName: String,
    lastName: String,
    role: String,
    email: String,
    dob: Date,
    password: String
});
module.exports = mongoose.model('User', userSchema);