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
      return `Hello, my name is ${this.name}`;
    }
}
return User;

function addPrototypeMethod(Constructor) {
  Constructor.prototype.sayHello = function() {
    return 'Hello World!'
  };
}

function addReverseString() {
  String.prototype.reverse = function() {
   let reversestring = '';
   for (var i = this.length - 1; i >= 0; i--) {
     reversestring += this[i]
   }
   return reversestring;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
