var exercises = require('../homework');

describe('getBiggest(x, y)', function() {
  it('should return x if it is larger than y', function() {
    expect(exercises.getBiggest(10, 5)).toBe(10);
  });
  it('should return y if it is larger than x', function() {
    expect(exercises.getBiggest(50, 100)).toBe(100);
  });
  it('should return either one if they are the same', function() {
    expect(exercises.getBiggest(1000, 1000)).toBe(1000);
  });
});

describe('greeting(language)', function() {
  it('should return \'Guten Tag!\' for German', function() {
    expect(exercises.greeting('German')).toBe('Guten Tag!');
  });
  it('should return \'Hola!\' for Spanish', function() {
    expect(exercises.greeting('Spanish')).toBe('Hola!');
  });
  it('should return \'Hello!\' for English', function() {
    expect(exercises.greeting('English')).toBe('Hello!');
  });
  it('should return \'Hello!\' if no argument is passed in or if a language beyond Spanish, English, and German is passed in.', function() {
    expect(exercises.greeting('French')).toBe('Hello!');
    expect(exercises.greeting()).toBe('Hello!');
  });
});

describe('isTenOrFive(num)', function() {
  it('should return true if num is 10 or 5', function() {
    expect(exercises.isTenOrFive(10)).toBe(true);
    expect(exercises.isTenOrFive(5)).toBe(true);
  });
  it('should return false if num is not 10 or 5', function() {
    expect(exercises.isTenOrFive(11)).toBe(false);
    expect(exercises.isTenOrFive(6)).toBe(false);
    expect(exercises.isTenOrFive(0)).toBe(false);
    expect(exercises.isTenOrFive(5.01)).toBe(false);
  });
});

describe('isInRange(num)', function() {
  it('should return true if num is inside range', function() {
    expect(exercises.isInRange(35.5)).toBe(true);
    expect(exercises.isInRange(40)).toBe(true);
    expect(exercises.isInRange(49)).toBe(true);
    expect(exercises.isInRange(21)).toBe(true);
  });
  it('should return false if outside of range', function() {
    expect(exercises.isInRange(10)).toBe(false);
    expect(exercises.isInRange(20)).toBe(false);
    expect(exercises.isInRange(50)).toBe(false);
    expect(exercises.isInRange(100)).toBe(false);
  });
});

describe('isInteger(num)', function() {
  it('should return true if num is 5', function() {
    expect(exercises.isInteger(5)).toBe(true);
  });
  it('should return false if num is 0.5', function() {
    expect(exercises.isInteger(0.5)).toBe(false);
  });
  it('should return true if num is -20', function() {
    expect(exercises.isInteger(-20)).toBe(true);
  });
  it('should return true for 0', function() {
    expect(exercises.isInteger(0)).toBe(true);
  });
});

describe('fizzBuzz(num)', function() {
  it('should return fizz if divisible by 3', function() {
    expect(exercises.fizzBuzz(9)).toBe('fizz');
  });
  it('should return buzz if divisible by 5', function() {
    expect(exercises.fizzBuzz(10)).toBe('buzz');
  });
  it('should return fizzbuzz if divisible by 3 and 5', function() {
    expect(exercises.fizzBuzz(15)).toBe('fizzbuzz');
  });
  it('should return num if not divisible by 3 or 5', function() {
    expect(exercises.fizzBuzz(4)).toBe(4);
  });
});

describe('isPrime(num)', function() {
  it('should return true if num is prime', function() {
    expect(exercises.isPrime(7)).toBe(true);
    expect(exercises.isPrime(97)).toBe(true);
  });
  it('should return false if num is not prime', function() {
    expect(exercises.isPrime(10)).toBe(false);
    expect(exercises.isPrime(100)).toBe(false);
    expect(exercises.isPrime(0)).toBe(false);
    expect(exercises.isPrime(1)).toBe(false);
  });
});

describe('multiplyArguments()', function() {
	it('should return the product of all the arguments', function() {
		var product = exercises.multiplyArguments(5, 5);
		var product2 = exercises.multiplyArguments();
		var product3 = exercises.multiplyArguments(3, 3, 3, 3);
		var product4 = exercises.multiplyArguments(1);
		var product5 = exercises.multiplyArguments(10, 0, 10);
		expect(product).toBe(25);
		expect(product2).toBe(0);
		expect(product3).toBe(81);
		expect(product4).toBe(1);
		expect(product5).toBe(0);
	});
});
