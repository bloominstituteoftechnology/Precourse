// Variable statement (var) declares a variable, meaning it's value
// example: 

//var x = 1;
//if (x === 1) {
//var x = 2;
//console.log(x);
// expected output: 2
//}

// String is zero or more characters written inside quotes.
//example: 
// var x = 'Kaitlyn Flynn';

// Functions are defined with the function keyword.You can use a function declaration or a function expression.
//example:
// function myFunction(a, b) {
//return a * b;
//}

// Arguments - The arguments object is an Array-like object corresponding to the arguments passed to a function. 
//example: 
//function func1(a, b, c) {
  //console.log(arguments[0]);
  // expected output: 1
  //console.log(arguments[1]);
  // expected output: 2
  //console.log(arguments[2]);
  // expected output: 3
  //}
//func1(1, 2, 3);

// Return statement stops the execution of a function and returns a value from that function.
//example:
//return the value of PI:
//function myFunction() {
  //return Math.PI;
//}

// if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed. The if/else statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.
//example: If the current time (HOUR) is less than 20:00, output "Good day" in an element with id="demo":
//var time = new Date().getHours(); 
//if (time < 20) {
//    document.getElementById("demo").innerHTML = "Good day";
//}

// Boolean value True - Everything With a "Value" is True
//example: Boolean(10 > 9)        
// returns true

// Boolean value False - Everything Without a "Value" is False
//example: var x = 0;
//Boolean(x);       // returns false