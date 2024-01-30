var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) {
      return x;
    } else {
      var res = x;
      for (let index = functions.length - 1; index >= 0; index--) {
        res = functions[index](res);
      }
      return res;
    }
  };
};
const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(fn(4));
