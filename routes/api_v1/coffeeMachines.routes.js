const router = require("express").Router();
const coffeeMachinesController = require("../../controllers/coffeeMachines.controller");
const cofffeeMachineFilterVM = require("../../validations/coffeeMachines/coffeeMachinesFilterValidation.model");
const { validateQueryObj } = require("../../utils/validator.helper");

router
  .route("/")
  .get(
    validateQueryObj(cofffeeMachineFilterVM),
    coffeeMachinesController.getAllCoffeeMachines
  );

module.exports = router;
