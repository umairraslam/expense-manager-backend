const Expense = require('../models/expense');

module.exports = {
    async saveExpense(req, res) {
        try {
            var expense = new Expense();
            expense.date = req.payload.date;
            expense.description = req.payload.desc;
            expense.amount = req.payload.amount;
            expense.month = req.payload.month;
            expense.year = req.payload.year;
            let response = await expense.save();
            return response;
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    },
    async getExpenses(req, res) {
        try {
            let response = await Expense.find();
            return response;
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    },
    async getExpenseByYearAndMonth(req, res) {
        try {
            let response = await Expense.find({ year: req.params.year, month: req.params.month });
            return response;
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    },
    async updateExpense(req, res) {
        try {
            let response = await Expense.update({ _id: req.params.id }, req.payload);
            return response;
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    },
    async deleteExpense(req, res) {
        try {
            let response = await Expense.find({ _id: req.params.id }).remove();
            return response;
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }
}