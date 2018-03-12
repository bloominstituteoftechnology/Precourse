<<<<<<< HEAD

=======
>>>>>>> 5038ffe789eff7e383a2454c436b121f99992bb6
/* eslint-disable no-undef */
const {
  nFactorial,
  nFibonacci,
} = require('../homework');

describe('nFactorial(n)', function() {
	it('should return the factorial of n', function() {
		expect(nFactorial(5)).toBe(120);
		expect(nFactorial(15)).toBe(1307674368000);
	});
});

describe('nFibonacci(n)', function() {
	it('should return the nth fibonacci number', () => {
		const fib1 = nFibonacci(5);
		const fib2 = nFibonacci(3);
		const fib3 = nFibonacci(1);
		expect(fib1).toBe(8);
		expect(fib2).toBe(3);
		expect(fib3).toBe(1);
	});
<<<<<<< HEAD
});
=======
});
>>>>>>> 5038ffe789eff7e383a2454c436b121f99992bb6
