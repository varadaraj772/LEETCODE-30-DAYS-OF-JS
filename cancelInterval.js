var cancellable = function (fn, args, t) {
  fn(...args);
  let timer = setInterval(() => fn(...args), t);

  let cancel = () => clearInterval(timer);
  return cancel;
};
