const mongoose = require("mongoose");
require("dotenv").config();
const fs = require("fs");

const coffeeMachineModel = require("../models/coffeeMachine.model");
const generateRandomData = require("./generateRandomData");
const { coffeeMachinesInterface } = require("../utils/api.constants");

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
    if (err) console.log("🎃🎃 Error while connecting to DB.");
    console.log("🎉🎉 Connected to DB");
  }
);

const coffeeMachines = generateRandomData(coffeeMachinesInterface);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await coffeeMachineModel.create(coffeeMachines);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await coffeeMachineModel.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
