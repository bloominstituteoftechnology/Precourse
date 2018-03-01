//Fenyman Writing Prompts

/*
prototype: A way that JavaScript objects can inherit methods and features without having to spend memory by housing that method or feature within each object. You can set a prototype once for each object class and then allow access to that prototype for every object within that class.

Constructors: Interchangeable with the term class in reference to a JavaScript object. This is a function that is written to create an object template upon which any number of objects can be created from/based off. Constructor functions start with an uppercase letter.

It looks like this:

Constructor:

function User(username, password, firstName, lastName) {
  this.username = username;
  this.password = password;
  this.firstName = firstName;
  this.lastName = lastName;
}

Prototype below:

User.prototype.SayHello = function () {
  return 'Hello, ' + this.username + '!');
};

Call the prototype:

console.log(user1.SayHello());
*/


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

  User.prototype.sayHi = function () {
    return 'Hello, my name is ' + this.name;
  };

  return User;
}

function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
  Constructor.prototype.sayHi = function () {
    return 'Hello World!';
  }
}

function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
  String.prototype.reverse = function () {
    let reverse = '';
    for (let i = this.length - 1; i >= 0; i--) {
      reverse += this[i];
    }
    return reverse;
  };
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
