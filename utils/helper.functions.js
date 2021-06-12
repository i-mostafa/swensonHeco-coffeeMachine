const {
  codeSpecifier,
  apiResources,
  coffeePodsInterface,
} = require("./api.constants");

/**
 * function to get all codes for a list of documents
 * @param  {Array} docs
 */
exports.getDocsCodes = (docs) => {
  let SKUCodes = new Set();
  for (doc of docs) {
    const docCodes = generateSKUs(doc);

    SKUCodes = new Set([...SKUCodes, ...docCodes]);
  }
  return [...SKUCodes];
};
/**
 * function to generate SKU codes for a document
 * @param  {Object} doc
 */
const generateSKUs = (doc) => {
  // get the initial code from first chars of splitter
  const [machine, type, sizeStr] = doc.productType.split("_");
  let code = `${machine[0]}${type[0]}`;
  // add size to code ** CM*
  code += codeSpecifier.size[sizeStr];

  // check the type of resource
  if (type === apiResources.machines) {
    // all machines has a code 0 for second position
    code += "0";
    //  return all models code
    return getModelCodes(code);
  } else if (type === apiResources.pods) {
    // get the index of flaver and at it to secod number
    code += getCodeIndex(coffeePodsInterface.cofeeFlaver, doc.cofeeFlaver);
    // add size to last position
    code += doc.packSize;
    return [code];
  }

  // if not tyoed to machine or pod return nothing
  // this shouldnot happen any more because of validation but still a valid case to check
  return [];
};

/**
 * generate all model codes for a generated code
 * @param  {String} code
 */
const getModelCodes = (code) => {
  const modelCodes = [];
  for (let value of Object.values(codeSpecifier.model)) {
    modelCodes.push(code + value);
  }
  return modelCodes;
};
/**
 * return the item index in the list
 * @param  {rray} list
 * @param  {Object} searchItem
 */
const getCodeIndex = (list, searchItem) => {
  return list.findIndex((item) => item === searchItem);
};
