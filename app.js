const express = require("express");

// routers
const CoffeMachinesRouter = require("./routes/api_v1/coffeeMachines.routes");
const CoffePodesRouter = require("./routes/api_v1/coffeePods.routes");

//express application
const app = express();

// middlewares
app.use(express.json());

app.use("/api/v1/coffee-machines", CoffeMachinesRouter);
app.use("/api/v1/coffee-pods", CoffePodesRouter);

// export application
module.exports = app;
