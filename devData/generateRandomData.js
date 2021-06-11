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

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomChoice = (list) => {
  const index = generateRandomNumber(0, list.length - 1);
  return list[index];
};
