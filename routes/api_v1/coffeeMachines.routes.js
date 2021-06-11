const router = require("express").Router();
const coffeeMachinesController = require("../../controllers/coffeeMachines.controller");

router.route("/").get(coffeeMachinesController.getAllCoffeeMachines);

module.exports = router;
