// Do not change any of the function names

function counter() {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count=0;
    return function() {
        count = count+1;
        return count;
    }
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
    let storageCache = {};
    return function(x) {
        if(storageCache === undefined){
            const result = cb(x);
            storageCache[x] = result;
        }
        
        return storageCache[x];
    };
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};


/*
 ~ Functions ~
Functions can be passed as, into, and out of variables.
Function is the potential for something to happen.
An outer function may contain another function, and the inner function will act as it was copied if its outer function call is saved to a variable. We're allowed to return functions out of functions. 

 ~ Scope and Closure ~
Global Scope: declared outside of a function & defined below the declaration (also built in declarations) inside and outside of functions.
Function Scope: Available within the function -- Reference error/not defined -- return statements communicate with the global scope.

 ~ Greeting Generator ~
returns a function to act as a template for functions bound to specific people 
Ex:
const greetAndy = greetingGenerator('Andy');
greetAndy(); //a specific function that outputs Hi, Andy 

 ~ Closure ~
When we take a parameter from a function and use it in a return function to create a closure.

Non-Closure Approach sets a variable to the function with array parameter, but there are times when we do not want the user to have acess to the array itself in the return statement.

Closure Approach uses a Higher Order Function that akes in the parameter and returns a function. Inner function takes no input parameters to return the array item. To use the function, we assign the generator (that resolves to an inner function) to a vatiable. This syntax does not allow the user to look into the array since the array variable is out of the Inner Function's scope.
* Dynamic logic has to run every time the function runs, and when user calls the function, they call the Inner Function. The dynamic logic will appear frozen if it is placed in an Outer Function.

 ~ Closure - Cache ~
Principle = Saving Time
Computer saves the data from a recently accessed website to avoid requesting data from server if the web page is refreshed. 
If the same operation is done many times, it is time consuming to run advanced calculations many times.
1. Create an empty object that collects results in a Higher Order Function
2. Check if there is no history of this calculation
3. Run the calculation
4. Save the result in the storageCache
5. Return where it is stored after the first calculation
Cache fills up/updates with use
    - User never sees the cache, but it helps save time by saving the data.
    - For passwords in the real world, more security measures are necessary

Random Index in Array:
const RandomIndex = function(length) {
Math.floor(Math.random()*length);
};

Tip: Become comfortable to write a function within a function with practice. More resources are available in README
 
*/