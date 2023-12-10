const Joi = require("joi");

const registrationSchema = Joi.object({
    email: Joi.string().required().email()
        .messages({
            'string.empty': `"Email" не может быть пустым`,
            'string.email': `"Email" не валиден`,
            'any.required': `"Email" - обязательное поле`
        }),
    name: Joi.string().required().messages({
        'string.empty': `"Name" не может быть пустым`,
        'any.required': `"Name" - обязательное поле`
    }),
    surname: Joi.string().required().messages({
        'string.empty': `"Name" не может быть пустым`,
        'any.required': `"Name" - обязательное поле`
    }),
    password: Joi.string().required().messages({
        'string.empty': `"Password" не может быть пустым`,
        'any.required': `"Password" - обязательное поле`
    }),
    password_confirmation: Joi.string().required().valid(Joi.ref('password')).messages({
        'string.empty': `"Password confirmation" не может быть пустым`,
        'any.required': `"Password confirmation" - обязательное поле`,
        'any.only': '"Password confirmation" должен совпадать с паролем',
    })
});

const loginSchema = Joi.object({
    email: Joi.string().required().email()
        .messages({
            'string.empty': `"Email" не может быть пустым`,
            'string.email': `"Email" не валиден`,
            'any.required': `"Email" - обязательное поле`
        }),
    password: Joi.string().required().messages({
        'string.empty': `"Password" не может быть пустым`,
        'any.required': `"Password" - обязательное поле`
    })
});


module.exports = {registrationSchema, loginSchema};
