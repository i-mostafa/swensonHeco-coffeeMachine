const mongoose = require("mongoose");
require("dotenv").config();
const fs = require("fs");

// models of db
const CoffeeMachineModel = require("../models/coffeeMachine.model");
const CoffeePodModel = require("../models/coffeePod.model");

const generateRandomData = require("./generateRandomData");
const {
  coffeeMachinesInterface,
  coffeePodsInterface,
} = require("../utils/api.constants");

// connect to db
mongoose.connect(
  process.env.DBURL,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err)
      process.env.NODE_ENV === "development" &&
        console.log("🎃🎃 Error while connecting to DB.");
    process.env.NODE_ENV === "development" &&
      console.log("🎉🎉 Connected to DB");
  }
);

const coffeeMachines = generateRandomData(coffeeMachinesInterface);
const coffeePods = generateRandomData(coffeePodsInterface);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await CoffeeMachineModel.create(coffeeMachines);
    await CoffeePodModel.create(coffeePods);
    process.env.NODE_ENV === "development" &&
      console.log("Data successfully loaded!");
  } catch (err) {
    process.env.NODE_ENV === "development" && console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await CoffeeMachineModel.deleteMany();
    await CoffeePodModel.deleteMany();
    process.env.NODE_ENV === "development" &&
      console.log("Data successfully deleted!");
  } catch (err) {
    process.env.NODE_ENV === "development" && console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
