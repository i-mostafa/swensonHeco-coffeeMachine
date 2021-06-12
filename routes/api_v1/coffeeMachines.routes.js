const router = require("express").Router();
const coffeeMachinesController = require("../../controllers/coffeeMachines.controller");
const cofffeeMachinesFilterVM = require("../../validations/coffeeMachines/coffeeMachinesFilterValidation.model");
const { validateQueryObj } = require("../../utils/validator.helper");

router
  .route("/")
  .get(
    validateQueryObj(cofffeeMachinesFilterVM),
    coffeeMachinesController.getAllCoffeeMachines
  );

module.exports = router;
