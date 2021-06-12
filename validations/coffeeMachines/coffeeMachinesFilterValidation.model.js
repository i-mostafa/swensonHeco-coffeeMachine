const Joi = require("@hapi/joi");
const { coffeeMachinesInterface } = require("../../utils/api.constants");

coffeeMachinesFilterValidationSchema = Joi.object().keys({
  productType: Joi.string()
  .valid(...coffeeMachinesInterface.productType),
  waterLine: Joi.string()
  .valid(...coffeeMachinesInterface.waterLine),
});

module.exports = coffeeMachinesFilterValidationSchema;
