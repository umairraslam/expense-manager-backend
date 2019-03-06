const Joi = require('joi');
const authController = require('../controllers/auth');

module.exports = [
    {
        method: 'POST',
        path: '/login',
        handler: authController.authenticate,
        config: {
            description: 'Authenticate',
            notes: 'Authenticate',
            tags: ['api'],
            auth: false,
            validate: {
                payload: Joi.object({
                    email: Joi.string().required(),
                    password: Joi.string().required()
                })
            }
        }
    },
    {
        method: 'POST',
        path: '/signUp',
        handler: authController.signUp,
        config: {
            description: 'Sign up',
            notes: 'Sign up',
            tags: ['api'],
            auth: false,
            validate: {
                payload: Joi.object({
                    firstName: Joi.string().required(),
                    lastName: Joi.string().required(),
                    role: Joi.string().required(),
                    email: Joi.string().required(),
                    dob: Joi.string().required(),
                    password: Joi.string().required()
                })
            }
        }
    }
]