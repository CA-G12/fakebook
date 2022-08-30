const Joi = require('joi');

const signUpValidate = () => {
    const schema = Joi.object({
        name: Joi
            .string()
            .alphanum()
            .min(3)
            .max(50)
            .required(),
        email: Joi
            .string()
            .max(100)
            .min(8)
            .email({minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}),
        password: Joi
            .string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        repeat_password: Joi
            .ref('password'),
    });
}

module.exports = signUpValidate;