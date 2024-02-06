const cancellable = (fn, args, t) =>
  clearTimeout.bind(null, setTimeout(fn, t, ...args));
