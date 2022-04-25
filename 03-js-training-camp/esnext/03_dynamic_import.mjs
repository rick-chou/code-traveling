export default {
  sum: (a, b) => console.log(a + b),
};

import(import.meta.url).then((module) => {
  module.default.sum(1, 2);
});
