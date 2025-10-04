const Joi = require('joi');

const schema = Joi.defaults((schema) => {
    switch (schema.type) {
        case 'string':
            return schema.trim();
        case 'object':
            return schema.min(1);
        default:
            return schema;
    }
});

const userSchema = schema.object({
    name: schema.string().required(),
    mobile_no: schema.string().pattern(/^\d{10}$/).required(),
    email: schema.string().email().required(),
    preference: schema.allow('')
});

module.exports = { userSchema };
