var filter = function (arr, fn) {
  const resArray = [];
  arr.forEach((element, index) => {
    fn(element, index) ? resArray.push(element) : false;
  });
  return resArray;
};

arr = [-2, -1, 0, 1, 2];
const newArray = filter(arr, function plusOne(n) {
  return n + 1;
});
console.log(newArray);
