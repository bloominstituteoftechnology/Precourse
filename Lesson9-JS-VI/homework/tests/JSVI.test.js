var exercises = require('../homework');

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
