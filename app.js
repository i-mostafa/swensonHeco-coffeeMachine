const express = require("express");

// routers
const CoffeMachineRouter = require("./routes/api_v1/coffeeMachines.routes");
const app = express();

// middlewares
app.use(express.json());

app.use("/api/v1/coffee-machines", CoffeMachineRouter);

// export application
module.exports = app;
