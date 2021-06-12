module.exports = class AppError extends Error {
  constructor(err) {
    process.env.NODE_ENV === "development" && console.log("err", err);
    super(err?.message);
    this.message = err?.message;
    this.status = err?.status;
    this.statusCode = err?.statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
};
