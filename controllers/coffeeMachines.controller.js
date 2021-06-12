const DbFactoryModel = require("../models/db.factory.model");
const CoffeeMachineModel = require("../models/coffeeMachine.model");
const catchAsync = require("../utils/catchAsync");
const { apiResources } = require("../utils/api.constants");
const { getDocsCodes } = require("../utils/helper.functions");

exports.getAllCoffeeMachines_ = DbFactoryModel.getAllRes(CoffeeMachineModel);

exports.getAllCoffeeMachines = catchAsync(async (req, res, next) => {
  const coffeeMachines = await DbFactoryModel.getAll(
    CoffeeMachineModel,
    req.query
  );
  const coffeeMachinesCodes = getDocsCodes(
    apiResources.machines,
    coffeeMachines
  );
  console.log(coffeeMachinesCodes);
  res.json({ status: "ok" });
});
