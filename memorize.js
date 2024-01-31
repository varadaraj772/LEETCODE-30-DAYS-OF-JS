function memoize(fn) {
  let memo = new Map();
  return function (...args) {
    let key = JSON.stringify(args);
    if (memo.has(key)) {
      return memo.get(key);
    } else {
      let res = fn(...args);
      memo.set(key, res);
      return res;
    }
  };
}
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
