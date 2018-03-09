var exercises = require('../homework');

describe('counter', () => {
	it('should return a function', () => {
		expect(typeof closureMethods.counter()).toBe('function');
	});
	it('should return 1 when the returned function is invoked', () => {
		expect(closureMethods.counter()()).toBe(1);
	});
	it('should increment and return the number each time the function is invoked', () => {
		const counterFunction = closureMethods.counter();
		expect(counterFunction()).toBe(1);
		expect(counterFunction()).toBe(2);
		expect(counterFunction()).toBe(3);
		expect(counterFunction()).toBe(4);
		expect(counterFunction()).toBe(5);
	});
});

describe('cacheFunction(cb)', function() {
	it('should return the callback function', function() {
		var cb = function() {};
		expect(typeof exercises.cacheFunction(cb)).toEqual('function');
	});
	it('should return the callback functions result when the cached function is invoked', function() {
		var cb = function(x) {
			return x * 2;
		};
		var cachedFunction = exercises.cacheFunction(cb);
		expect(cachedFunction(5)).toBe(10);
	});
	it('should cache function results', function() {
		var cb = jest.fn();
		var cachedFunction = exercises.cacheFunction(cb);
		cachedFunction(true);
		cachedFunction(true);
		cachedFunction(true);
		cachedFunction(true);
		cachedFunction(true);
		cachedFunction(10);
		cachedFunction(10);
		cachedFunction(10);
		cachedFunction(10);
		expect(cb).toHaveBeenCalledTimes(2);
	});
});
