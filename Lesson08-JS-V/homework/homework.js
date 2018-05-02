// Do not change any of the function names

function createUserClass() {
  // create an ES6 class or a constructor function called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the class


////ES2015 CLASS BELOW
 //  
 class User {
  constructor(options) {
    this.username = options.username;
    this.name = options.name;
    this.email = options.email;
    this.password = options.password;
  }
  sayHi() {
    return 'Hello, my name is ' + this.name;
  }
}
return User ;  
}
 //

////CONSTRUCTOR FUNCTION BELOW
/* //
 function User (options) {
   this.username = options.username ;
   this.name = options.name ;
   this.email = options.email ;
   this.password = options.password ;
 } 
 User.prototype.sayHi = function() {
   return 'Hello, my name is ' + this.name ;
 } ;
 return User ;  
}
*/ //


function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
  Constructor.prototype.sayHi = function () {
    return 'Hello World!' ;
  } ;
}


 //
function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
   
  
////THERE ARE MANY WAYS TO COMPLETE THIS REVERSE STRING TASK.  HERE IS ONE WAY.
  String.prototype.reverse = function () {
    return this.split('').reverse().join('') ;
  } ;
}

 //
////ABOVE METHODS ARE DAISY CHAINED TOGETHER.  BELOW IS WRTTEN OUT, STEP-BY-STEP. 
/* //
  String.prototype.reverse = function () {

////SPLIT() METHOD SPLITS A STRING OBJECT, INTO AN ARRAY CONTAINING SUB-STRINGS
//EXAMPLE: 'hi' BECOMES ['h', 'i']
    
    let splitString = this.split('') ;

////REVERSE() METHOD, REVERSES AN ARRAY's ORDER, IN PLACE. 
//NOTE: reverse() IS A BUILT-IN JS METHOD, NOT THE .PROTOTYPE BEING MADE ABOVE, NAMED THE SAME.
//EXAMPLE: ['h', 'i'] BECOMES ['i', 'h']

    let reverseArray = splitString.reverse() ;

////JOIN() METHOD JOINS ALL ELEMENTS OF AN ARRAY, INTO A STRING.
//EXAMPLE: ['i', 'h'] BECOMES 'ih'    

    let joinArray = reverseArray.join('') ;
      return joinArray ;
  } ;
}
*/ //


// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
