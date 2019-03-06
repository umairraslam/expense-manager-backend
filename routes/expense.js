const expenseController = require('../controllers/expense');
const Joi = require('joi');

module.exports = [
    {
        method: 'POST',
        path: '/expense',
        handler: expenseController.saveExpense,
        config: {
            description: 'Save Expense',
            notes: 'Save Expense',
            tags: ['api'],
            auth: false,
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                payload: Joi.object({
                    date: Joi.string(),
                    description: Joi.string(),
                    amount: Joi.number(),
                    month: Joi.string(),
                    year: Joi.number()
                })
            }
        }
    },
    {
        method: 'GET',
        path: '/expense',
        handler: expenseController.getExpenses,
        config: {
            description: 'Get All Expense',
            notes: 'Get All Expense',
            tags: ['api'],
            auth: false,
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true })
            }
        }
    },
    {
        method: 'GET',
        path: '/expense/{year}/{month}',
        handler: expenseController.getExpenseByYearAndMonth,
        config: {
            description: 'Get Yearly and Monthly Expenses',
            notes: 'Get Yearly and Monthly Expenses',
            tags: ['api'],
            auth: false,
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                params: Joi.object({
                    year: Joi.number().required(),
                    month: Joi.string().required()
                })
            }
        }
    },
    {
        method: 'PUT',
        path: '/expense/{id}',
        handler: expenseController.updateExpense,
        config: {
            description: 'Update Expense',
            notes: 'Update Expense',
            tags: ['api'],
            auth: false,
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                payload: Joi.object({
                    date: Joi.string(),
                    description: Joi.string(),
                    amount: Joi.number(),
                    month: Joi.string(),
                    year: Joi.number()
                }),
                params: Joi.object({
                    id: Joi.string().required()
                })
            }
        }
    },
    {
        method: 'DELETE',
        path: '/expense/{id}',
        handler: expenseController.deleteExpense,
        config: {
            description: 'Delete Expense',
            notes: 'Delete Expense',
            tags: ['api'],
            auth: false,
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                params: Joi.object({
                    id: Joi.string().required()
                })
            }
        }
    }
]