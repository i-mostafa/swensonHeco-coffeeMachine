// dependencies
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

const AppError = require("./errors/appError");
const errorList = require("./errors/error.list");
const globalErrorHandler = require("./errors/globalErrorHandler");

// routers
const CoffeMachinesRouter = require("./routes/api_v1/coffeeMachines.routes");
const CoffePodesRouter = require("./routes/api_v1/coffeePods.routes");

//express application
const app = express();

// security

app.use(cors());
app.options("*", cors());

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "10kb" }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

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
