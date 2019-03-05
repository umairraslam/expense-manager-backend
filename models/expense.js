var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var expenseSchema = new Schema({
    date: Date,
    description: String,
    amount: Number,
    month: String,
    year: Number
});
module.exports = mongoose.model('Expense', expenseSchema);