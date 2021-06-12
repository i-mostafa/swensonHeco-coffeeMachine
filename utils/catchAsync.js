/**
 * function to catch error of that hapens inside the wrapped function
 * @param {Function} fn
 * @returns
 */
module.exports = (fn) => (req, res, next) => {
  return fn(req, res, next).catch(next);
};
