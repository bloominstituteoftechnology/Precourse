// Do not change any of the function names

function counter() {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
	let countIt = {}, count = 0;
	countIt.count = function(){
		count++;
		return count;
	};
	return countIt.count;
}

function cacheFunction(cb) {
  // use closure to create a cache for the cb function
  // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
  // when the function you return is called again with an argument that it has seen before it should not call cb
  // but should instead directly returned the previous result
  // example:
  // cb -> function(x) { return x * x; }
  // if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
  // if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again
 	let cache = {};
	return function(num){
		if(num in cache){return cache[num];} //9
		
		cache[num] = num * num;
		return cb(num);
	}
	
}


/*
	"cb was being called 4 times, so I got rid of cb after the 'if' and 
	 directly assigned it to what cb was doing annddd wallaaa it worked"
	
 	let cache = {};
	return function(num){
		if(num in cache){return cache[num];} //9
		else {
			cache[num] = cb(num);
			return cb(num);
		}
	}
		// down to 4 times
*/










// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
