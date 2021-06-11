const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoffeePodsSchema = new Schema(
  {
    productType: { type: String, required: true },
    cofeeFlaver: { type: String, required: true },
    packSize: { type: String, required: true },
  },
  { timestamps: true }
);

const CoffeePodsModel = mongoose.model("CofeePods", CoffeePodsSchema);

module.exports = CoffeePodsModel;
