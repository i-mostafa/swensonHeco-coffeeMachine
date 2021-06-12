const DbFactoryModel = require("../models/db.factory.model");
const CoffeeMachineModel = require("../models/coffeeMachine.model");
const catchAsync = require("../utils/catchAsync");
const { apiResources } = require("../utils/api.constants");
const { getDocsCodes } = require("../utils/helper.functions");

exports.getAllCoffeeMachines = catchAsync(async (req, res, next) => {
  // read all docs that matches the query from db
  const coffeeMachines = await DbFactoryModel.getAll(
    CoffeeMachineModel,
    req.validatedQueryObj
  );
  // convert docs to corresponsive codes
  const coffeeMachinesCodes = getDocsCodes(coffeeMachines);

  res.json({ codes: coffeeMachinesCodes });
});
