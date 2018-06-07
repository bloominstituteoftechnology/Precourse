// Do not change any of the function names

function createUserClass() {
class User {
constructor(options) {
this.username = options.username;
this.name = options.name;
this.email = options.email;
this.password = options.password;
 }
  sayHi() {
    return 'Hello, my name is ${this.name}';
   }
 }
return User;
// create an ES6 class or a constructor function called User
// it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
}

function addPrototypeMethod(Constructor) {
 Constructor.prototype.sayHi = function() {
   return 'Hello World!';
};
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
}

function addReverseString() {
 'string'.__proto__.reverse = function() {
   let splittedString = this.split('');
   let reversedSplittedString = splittedString.reverse();
 return reversedSplittedString.join('');
};
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
