const DbFactoryModel = require("../models/db.factory.model");
const CoffeePodModel = require("../models/coffeePod.model");
const catchAsync = require("../utils/catchAsync");
const { apiResources } = require("../utils/api.constants");
const { getDocsCodes } = require("../utils/helper.functions");

exports.getAllCoffeePods_ = DbFactoryModel.getAllRes(CoffeePodModel);

exports.getAllCoffeePods = catchAsync(async (req, res, next) => {
  const coffeePods = await DbFactoryModel.getAll(CoffeePodModel, req.query);
  const coffeePodsCodes = getDocsCodes(coffeePods);

  res.json({ codes: coffeePodsCodes });
});
