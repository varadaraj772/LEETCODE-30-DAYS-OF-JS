var createCounter = (n) => () => n++;

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
