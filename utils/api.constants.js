exports.apiResources = {
  machines: "MACHINE",
  pods: "POD",
};

exports.codeSpecifier = {
  size: {
    SMALL: 0,
    LARGE: 1,
    undefined: 0,
  },
  model: {
    base: 1,
    premium: 2,
    deluxe: 3,
  },
};
exports.coffeeMachinesInterface = {
  productType: [
    "COFFEE_MACHINE_LARGE",
    "COFFEE_MACHINE_SMALL",
    "ESPRESSO_MACHINE",
  ],
  waterLine: [true, false],
};
exports.coffeePodsInterface = {
  productType: ["COFFEE_POD_LARGE", "COFFEE_POD_SMALL", "ESPRESSO_POD"],
  cofeeFlaver: [
    "COFFEE_FLAVOR_VANILLA",
    "COFFEE_FLAVOR_CARAMEL",
    "COFFEE_FLAVOR_PSL",
    "COFFEE_FLAVOR_MOCHA",
    "COFFEE_FLAVOR_HAZELNUT",
  ],
  packSize: [1, 3, 5, 7],
};
