const express = require("express");
const AppError = require("./errors/appError");
const errorList = require("./errors/error.list");
const globalErrorHandler = require("./errors/globalErrorHandler");

// routers
const CoffeMachinesRouter = require("./routes/api_v1/coffeeMachines.routes");
const CoffePodesRouter = require("./routes/api_v1/coffeePods.routes");

//express application
const app = express();

// middlewares
app.use(express.json());

app.use("/api/v1/coffee-machines", CoffeMachinesRouter);
app.use("/api/v1/coffee-pods", CoffePodesRouter);

// Not found routes
app.all("*", (req, res, next) => {
  next(new AppError(errorList({ url: req.originalUrl }).notFound));
});

// Global error handler
app.use(globalErrorHandler);

// export application
module.exports = app;
