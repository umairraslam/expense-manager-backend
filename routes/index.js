const testController = require('../controllers/test');
const Joi = require('joi');

module.exports = [
    {
        method: 'GET',
        path: '/api/test/{testParam}',
        handler: testController.testController,
        config: {
            description: 'Add route description here',
            notes: 'Add notes here',
            tags: ['api'],
            auth: false,
            validate: {
                params: Joi.object({
                    testParam: Joi.string()
                })
            }
        }
    }
]