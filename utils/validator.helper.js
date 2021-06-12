exports.validateQueryObj = (validatonSchema) => (req, res, next) => {
  let result = validatonSchema.validate(req.query);
  if (result.error)
    return next(new Error(" Bad request" + result.error.details[0].message));

  req.validatedQueryObj = req.query;
  next();
};
