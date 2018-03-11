var exercises = require('../homework');

describe('nFactorial(n)', function() {
	it('should return the factorial of n', function() {
		expect(exercises.nFactorial(5)).toBe(120);
		expect(exercises.nFactorial(15)).toBe(1307674368000);
	});
});

describe('nFibonacci(n)', function() {
	it('should return the nth fibonacci number', () => {
		const fib1 = recursiveMethods.nFibonacci(5);
		const fib2 = recursiveMethods.nFibonacci(3);
		const fib3 = recursiveMethods.nFibonacci(1);
		expect(fib1).toBe(8);
		expect(fib2).toBe(3);
		expect(fib3).toBe(1);
	});
});

