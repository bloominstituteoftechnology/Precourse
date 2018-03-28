const counter = () => {
  let count = 0;
  return () => ++count;
};

const cacheFunction = (cb) => {
  const cache = {};
  return (arg) => {
    if (arg in cache) return cache[arg];
    return cache[arg] = cb(arg);
  };
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter: counter,
  cacheFunction: cacheFunction,
};
