var exercises = require('../homework');

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

describe('invokeCallback(cb)', function() {
  it('should invoke the callback that is passed in', function() {
  	var cb = jest.fn();
  	exercises.invokeCallback(cb);
    expect(cb).toHaveBeenCalled();
  });
});

describe('sumArray(cb)', function() {
	it('should pass the sum of all array numbers to cb', function(done) {
		exercises.sumArray([1, 2, 3, 4, 5], function(sum) {
			expect(sum).toBe(15);
			done();
		});
	});
});

describe('forEach(arr, cb)', function() {
	it('should pass all array items one by one to cb', function() {
		var nums = [];
		exercises.forEach([1, 2, 3, 4, 5], function(num) {
			nums.push(num);
		});
		expect(nums).toEqual([1, 2, 3, 4, 5]);
	});
});

describe('map(arr, cb)', function() {
	it('should return an array of all the processed array elements', function() {
		var squares = exercises.map([1, 2, 3, 4, 5], function(num) {
			return num * num;
		});
		expect(squares).toEqual([1, 4, 9, 16, 25]);
	});
});

describe('createUserClass()', function() {
	it('should return a user constructor that correctly builds user objects', function() {
		var User = exercises.createUserClass();
		var user = new User({username: 'SunJieMing', name: 'Ben', email: 'ben@lambdaschool.com', password: 'LS Rocks!' });
		expect(user.username).toBe('SunJieMing');
		expect(user.name).toBe('Ben');
		expect(user.email).toBe('ben@lambdaschool.com');
		expect(user.password).toBe('LS Rocks!');
	});
});

describe('addPrototypeMethod(Constructor)', function() {
	it('should add the method sayHi to the constructor', function() {
		function Test() {
			this.test = true;
		}
		exercises.addPrototypeMethod(Test);
		var test = new Test();
		expect(test.sayHi()).toBe('Hello World!');
	});
});

// describe('addReverseString(StringPrototype)', function(){
// 	it('should add a reverse string method to the String prototype that returns a reversed version of the string', function() {
// 		exercises.addReverseString();
// 		var str = 'Hello';
// 		expect(str.reverse()).toBe('olleH');
// 	});
// });

// describe('nFactorial(n)', function() {
// 	it('should return the factorial of n', function() {
// 		expect(exercises.nFactorial(5)).toBe(120);
// 		expect(exercises.nFactorial(15)).toBe(1307674368000);
// 	});
// });

// describe('cacheFunction(cb)', function() {
// 	it('should return the callback function', function() {
// 		var cb = function() {};
// 		expect(typeof exercises.cacheFunction(cb)).toEqual('function');
// 	});
// 	it('should return the callback functions result when the cached function is invoked', function() {
// 		var cb = function(x) {
// 			return x * 2;
// 		};
// 		var cachedFunction = exercises.cacheFunction(cb);
// 		expect(cachedFunction(5)).toBe(10);
// 	});
// 	it('should cache function results', function() {
// 		var cb = jest.fn();
// 		var cachedFunction = exercises.cacheFunction(cb);
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
