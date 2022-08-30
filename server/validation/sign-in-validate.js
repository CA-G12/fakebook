const Joi = require('joi');

const signInValidate = () => {
    const schema = Joi.object({
        email: Joi
            .string()
            .max(100)
            .min(8)
            .email({minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}),
        password: Joi
            .string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    });
}

module.exports = signInValidate;