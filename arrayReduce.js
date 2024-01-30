var reduce = function (nums, fn, init) {
  val = init;
  nums.forEach((element) => {
    val = fn(val, element);
  });
  return val;
};
nums = [1, 2, 3, 4];
var init = 0;
const output = reduce(
  nums,
  function sum(accum, curr) {
    return accum + curr ;
  },
  init
);
console.log(output);
