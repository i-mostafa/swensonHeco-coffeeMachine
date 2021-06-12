const DbFactoryModel = require("../models/db.factory.model");
const CoffeeMachineModel = require("../models/coffeeMachine.model");
const catchAsync = require("../utils/catchAsync");
const { apiResources } = require("../utils/api.constants");
const { getDocsCodes } = require("../utils/helper.functions");

exports.getAllCoffeeMachines_ = DbFactoryModel.getAllRes(CoffeeMachineModel);

exports.getAllCoffeeMachines = catchAsync(async (req, res, next) => {
  const coffeeMachines = await DbFactoryModel.getAll(
    CoffeeMachineModel,
    req.validatedQueryObj
  );
  const coffeeMachinesCodes = getDocsCodes(coffeeMachines);

  res.json({ codes: coffeeMachinesCodes });
});
