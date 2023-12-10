const Joi = require("joi");

class Validator {


    validate(schema, underValidation = 'body') {
        return async (req, res, next) => {
            const {error} = schema.validate(req[underValidation], { "abortEarly": false});
            if (error) return res.status(400).json({errors: Validator.#parseValidationJOIErrors(error)});
            next();
        };
    }
    static #parseValidationJOIErrors(errors) {
        return errors.details.map(el => ({message: el.message, field: el.path[0]}));
    }
}

module.exports = Validator;
