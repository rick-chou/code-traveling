/**
 *
 * @param {Function} operator
 * @param {number} defaultValue
 */
module.exports = (operator, defaultValue = 0) => {
  return function (value, other) {
    var result;
    if (value === undefined && other === undefined) {
      return defaultValue;
    }
    if (value !== undefined) {
      result = value;
    }
    if (other !== undefined) {
      if (result === undefined) {
        return other;
      }
      if (typeof value === 'string' || typeof other === 'string') {
        value = value.toString();
        other = other.toString();
      } else {
        value = parseInt(value, 10);
        other = parseInt(other, 10);
      }
      result = operator(value, other);
    }
    return result;
  };
};
