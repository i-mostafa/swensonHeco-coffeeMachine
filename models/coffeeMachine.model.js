const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoffeeMachineSchema = new Schema(
  {
    productType: { type: String, required: true },
    waterLine: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const CoffeeMachineModel = mongoose.model("CofeeMachine", CoffeeMachineSchema);

module.exports = CoffeeMachineModel;
