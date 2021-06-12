const router = require("express").Router();
const coffeePodsController = require("../../controllers/coffeePods.controller");
const cofffeePodsFilterVM = require("../../validations/coffeePods/coffeePodsFilterValidation.model");
const { validateQueryObj } = require("../../utils/validator.helper");

router
  .route("/")
  .get(
    validateQueryObj(cofffeePodsFilterVM),
    coffeePodsController.getAllCoffeePods
  );

module.exports = router;
