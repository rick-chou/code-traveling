/**
 *
 * @param {Array} array
 * @param {Array} other
 */
module.exports = (array, other) => {
  return array.filter((item) => other.includes(item));
};
