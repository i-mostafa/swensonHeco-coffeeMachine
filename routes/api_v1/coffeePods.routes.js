const router = require("express").Router();
const coffeePodsController = require("../../controllers/coffeePods.controller");

router.route("/").get(coffeePodsController.getAllCoffeePods);

module.exports = router;
