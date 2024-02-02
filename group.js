Array.prototype.groupBy = function (fn) {
  const obj = {};
  for (let ele of this) {
    const id = fn(ele);
    obj[id] ? obj[id].push(ele) : (obj[id] = [ele]);
  }
  return obj;
};
let item = [{ id: "1" }, { id: "1" }, { id: "2" }];
const fn = function (item) {
  return item.id;
};

console.log(item.groupBy(fn));

// {
// "1": [{"id": "1"}, {"id": "1"}],
// "2": [{"id": "2"}]
// }
