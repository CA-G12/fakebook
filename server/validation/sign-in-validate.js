const Joi = require('joi');

const signInValidate = Joi.object({
  email: Joi
    .string()
    .max(100)
    .min(8)
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi
    .string()
    .alphanum(),
});

module.exports = signInValidate;
