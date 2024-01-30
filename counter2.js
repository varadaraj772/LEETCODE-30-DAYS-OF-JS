var createCounter = function (init) {
  let prev = init;
  return {
    increment: function () {
      return ++prev;
    },

    decrement: function () {
      return --prev;
    },
    reset: function () {
      return (prev = init);
    },
  };
};

const counter = createCounter(5);
console.log(counter);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
