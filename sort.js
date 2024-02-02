var sortBy = function (arr, fn) {
  return arr.sort((a, b) => {
    return fn(a) - fn(b);
  });
};
let arr = [5, 4, 1, 2, 3];
const fn = (x) => x;
console.log(sortBy(arr, fn));
