const DbFactoryModel = require("../models/db.factory.model");
const CoffeePodModel = require("../models/coffeePod.model");
const catchAsync = require("../utils/catchAsync");
const { apiResources } = require("../utils/api.constants");
const { getDocsCodes } = require("../utils/helper.functions");

exports.getAllCoffeePods = catchAsync(async (req, res, next) => {
  // read all docs that matches the query from db

  const coffeePods = await DbFactoryModel.getAll(
    CoffeePodModel,
    req.validatedQueryObj
  );

  // convert docs to corresponsive codes

  const coffeePodsCodes = getDocsCodes(coffeePods);

  res.json({ codes: coffeePodsCodes });
});
