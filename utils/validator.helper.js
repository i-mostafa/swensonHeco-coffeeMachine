const AppError = require("../errors/appError");
const errorList = require("../errors/error.list");

/** function to validate comming query to required schema
 * @param  {Joi.Schema} validatonSchema
 */
exports.validateQueryObj = (validatonSchema) => (req, res, next) => {
  let result = validatonSchema.validate(req.query);
  if (result.error)
    return next(
      new AppError(
        errorList({ msg: result.error.details[0].message }).validationError
      )
    );
  req.validatedQueryObj = req.query;
  next();
};
