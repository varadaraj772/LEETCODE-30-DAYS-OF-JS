var flat = function (arr, n) {
  const ans = [];
  for (var x of arr) {
    if (Array.isArray(x) && n > 0) ans.push(...flat(x, n - 1));
    else ans.push(x);
  }
  return ans;
};
