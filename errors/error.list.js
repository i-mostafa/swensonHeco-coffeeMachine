module.exports = (errOptions = {}) => ({
  notFound: returnErrorBody(
    "error",
    `This target '${errOptions?.url}' not found`,
    404
  ),

  validationError: returnErrorBody(
    "error",
    `Validation Error: '${errOptions?.msg}'`,
    400
  ),
});

const returnErrorBody = (status, message, statusCode) => ({
  status,
  message,
  statusCode,
});
