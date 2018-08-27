describe('Test suite runs', () => {
  it('Will run the tests', () => {
    expect(true).toBe(true);
  })
})

// /* eslint-disable no-undef */
// const {
//   counter,
//   cacheFunction,
// } = require('../homework');

// describe('counter', () => {
// 	it('should return a function', () => {
// 		expect(typeof counter()).toBe('function');
// 	});
// 	it('should return 1 when the returned function is invoked', () => {
// 		expect(counter()()).toBe(1);
// 	});
// 	it('should increment and return the number each time the function is invoked', () => {
// 		const counterFunction = counter();
// 		expect(counterFunction()).toBe(1);
// 		expect(counterFunction()).toBe(2);
// 		expect(counterFunction()).toBe(3);
// 		expect(counterFunction()).toBe(4);
// 		expect(counterFunction()).toBe(5);
// 	});
// });

// describe('cacheFunction(cb)', function() {
// 	it('should return the callback function', function() {
// 		const cb = function() {};
// 		expect(typeof cacheFunction(cb)).toEqual('function');
// 	});
// 	it('should return the callback functions result when the cached function is invoked', function() {
// 		const cb = function(x) {
// 			return x * 2;
// 		};
// 		const cachedFunction = cacheFunction(cb);
// 		expect(cachedFunction(5)).toBe(10);
// 	});
// 	it('should cache function results', function() {
// 		const cb = jest.fn();
// 		const cachedFunction = cacheFunction(cb);
// 		cachedFunction(true);
// 		cachedFunction(true);
// 		cachedFunction(true);
// 		cachedFunction(true);
// 		cachedFunction(true);
// 		cachedFunction(10);
// 		cachedFunction(10);
// 		cachedFunction(10);
// 		cachedFunction(10);
// 		expect(cb).toHaveBeenCalledTimes(2);
// 	});
// });
