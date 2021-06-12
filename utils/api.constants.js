exports.apiResources = {
  machines: "MACHINE",
  pods: "PODS",
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
