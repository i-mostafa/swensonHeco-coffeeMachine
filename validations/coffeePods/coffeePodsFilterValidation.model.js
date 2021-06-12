const Joi = require("@hapi/joi");
const { coffeePodsInterface } = require("../../utils/api.constants");

coffeePodsFilterValidationSchema = Joi.object().keys({
  productType: Joi.string().valid(...coffeePodsInterface.productType),

  cofeeFlaver: Joi.string().valid(...coffeePodsInterface.cofeeFlaver),

  packSize: Joi.number().valid(...coffeePodsInterface.packSize),
});

module.exports = coffeePodsFilterValidationSchema;
