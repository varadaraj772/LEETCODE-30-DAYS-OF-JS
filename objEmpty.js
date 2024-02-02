var isEmpty = function (obj) {
  return Object.entries(obj).length ? false : true;
};
obj = { x: 5, y: 42 };

console.log(isEmpty(obj));
