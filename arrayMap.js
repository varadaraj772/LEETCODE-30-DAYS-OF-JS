var map = function (arr, fn) {
  const resArray = [];
  arr.forEach((element, index) => {
    resArray.push(fn(element, index));
  });
  return resArray;
};

arr = [1, 2, 3];
const newArray = map(arr, function plusone(n) {
  return n + 1;
});
console.log(newArray);
