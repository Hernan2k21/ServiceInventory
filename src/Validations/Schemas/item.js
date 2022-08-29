const Joi = require("joi");
const itemSchema = Joi.object().keys({
    "name": Joi.string(),
    "stock": Joi.number(),
    "listed": Joi.number().valid(0,1),
    "price": Joi.number()
}).options({ presence: 'required' }).required();

module.exports = itemSchema