const Joi = require("joi");
const exampleSchema = Joi.object().keys({
    "email": Joi.string().email(),
    "password": Joi.string()
});

module.exports = exampleSchema