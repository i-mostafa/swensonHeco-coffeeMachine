const {
  codeSpecifier,
  apiResources,
  coffeePodsInterface,
} = require("./api.constants");

exports.getDocsCodes = (docs) => {
  let SKUCodes = new Set();
  for (doc of docs) {
    const docCodes = generateSKUs(doc);

    SKUCodes = new Set([...SKUCodes, ...docCodes]);
  }
  return [...SKUCodes];
};

const generateSKUs = (doc) => {
  const [machine, type, sizeStr] = doc.productType.split("_");
  let code = `${machine[0]}${type[0]}`;
  code += codeSpecifier.size[sizeStr];

  if (type === apiResources.machines) {
    code += "0";
    return getModelCodes(code);
  } else if (type === apiResources.pods) {
    code += getCodeIndex(coffeePodsInterface.cofeeFlaver, doc.cofeeFlaver);
    code += doc.packSize;
    return [code];
  }

  return [];
};

const getModelCodes = (code) => {
  const modelCodes = [];
  for (let value of Object.values(codeSpecifier.model)) {
    modelCodes.push(code + value);
  }
  return modelCodes;
};

const getCodeIndex = (list, searchItem) => {
  return list.findIndex((item) => item === searchItem);
};
