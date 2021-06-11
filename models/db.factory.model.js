const catchAsync = require("../utils/catchAsync");
const DbHelper = require("../utils/db.helper");
/**
 * function to get all records that matches the query on a db model
 * @param  {Mongoose.model} dbModel
 * @param  {Object} queryObj
 */
exports.getAll = async (dbModel, queryObj) => {
  const dbHelper = new DbHelper(dbModel, queryObj).filter();
  return await dbHelper.query;
};

/**
 * function to get all records that matches the query on a db model with response code
 * @param  {Mongoose.model} dbModel
 */
exports.getAllRes = (dbModel) =>
  catchAsync(async (req, res, next) => {
    const docs = await this.getAll(dbModel, req.validatedQueryObj);

    res.status(200).json({
      status: "success",
      results: docs.length,
      data: docs,
    });
  });
