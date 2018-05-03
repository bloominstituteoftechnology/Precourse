// Do not change any of the function names

function counter() {
  let increment = 0;
  return function() {
    return increment += 1;
  };
}

function cacheFunction(cb) {
  const storCache = {};
  return function(num) {
    if (num in storCache) {
      return storCache[num];
    }
    storCache[num] = cb(num);
    return storCache[num];
  };
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
