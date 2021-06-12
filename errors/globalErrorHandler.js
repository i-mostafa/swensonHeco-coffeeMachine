/**
 * global error handler to fetch errors from all application targets
 * @param {AppError} err
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
module.exports = (err, req, res, next) => {
  let stack =
    process.env.NODE_ENV === "development"
      ? err.stack.split(" at ")[1]
      : undefined;
  process.env.NODE_ENV === "development" &&
    console.error("🚨 Error: " + err.message + " at " + stack);
  res.status(err?.statusCode || 500).json({
    status: err?.status,
    message: err?.message,
    stack,
  });
};
