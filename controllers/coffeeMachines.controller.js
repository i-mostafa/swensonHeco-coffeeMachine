const DbFactoryModel = require("../models/db.factory.model");
const CoffeeMachineModel = require("../models/coffeeMachine.model");

exports.getAllCoffeeMachines = DbFactoryModel.getAllRes(CoffeeMachineModel);
