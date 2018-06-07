// Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.

// 	* `prototype` - 'prototype' is the property that is created for each and every object in Javascript. It allows for us to set new properties and methods onto objects. The prototype property allows us to save on how much memory cost exists for creating new functions, instead enabling us to use the prototype to set functions only once rather than re-creating functions for each individual object.

// 	* Constructors - Also known as classes, constructors are objects that can be setup to make multiple objects that share common traits (and those traits may have different values). It saves on the amount of code & time that would otherwise be spent on hard coding the keys and values for objects.

// Do not change any of the function names

function createUserClass() {
  // create an ES6 class or a constructor function called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the class
  function User(options) {
    this.username = options.username;
    this.name = options.name;
    this.email = options.email;
    this.password = options.password;
  }

  User.prototype.sayHi = function() {
    'Hello, my name is' + this.name;
  };
  return User;
}

function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
  Constructor.prototype.sayHi = function() {
    return 'Hello World!';
  };
}

function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
  String.prototype.reverse = function() {
    return this.split('')
      .reverse()
      .join('');
  };
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString
};
