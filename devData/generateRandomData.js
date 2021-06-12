/**function to generate random document that follows the validation schame provided by interface
 * @param  {Object} interface
 */
module.exports = (interface) => {
  const keys = Object.keys(interface);
  const data = [];
  const dataLength = generateRandomNumber(
    process.env.MIN_DEV_RECORDS || 10,
    process.env.MAX_DEV_RECORDS || 50
  );

  if (keys.length < 1) return {};
  for (let i = 0; i < dataLength; i++) {
    const doc = {};
    for (key of keys) {
      doc[key] = getRandomChoice(interface[key]);
    }
    data.push(doc);
  }
  return data;
};

/** function to generate random number between min and max
 * @param  {Number} min
 * @param  {Number} max
 */
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/** pick a random choice form array
 * @param  {Array} list
 */
const getRandomChoice = (list) => {
  const index = generateRandomNumber(0, list.length - 1);
  return list[index];
};
