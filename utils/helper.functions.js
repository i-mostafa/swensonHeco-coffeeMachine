const { codeSpecifier, apiResources } = require("./api.constants");

exports.getDocsCodes = (docs) => {
  let codes = new Set();
  for (doc of docs) {
    const code = getInitialCode(doc.productType);
    const modelCodes = getModelCodes(code);
    console.log(modelCodes);
    codes = new Set([...codes, ...modelCodes]);
  }
  return [...codes];
};

const getInitialCode = (productType) => {
  let codeNumber = "";
  const [machine, type, sizeStr] = productType.split("_");
  codeNumber += codeSpecifier.size[sizeStr];
  if (type === apiResources.machines) {
    codeNumber += "0";
  }
  const code = `${machine[0]}${type[0]}${codeNumber}`;
  return code;
};

const getModelCodes = (code) => {
  const modelCodes = [];
  for (let value of Object.values(codeSpecifier.model)) {
    modelCodes.push(code + value);
  }
  return modelCodes;
};
