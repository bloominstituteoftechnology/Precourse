// Do not change any of the function names

function createUserClass (username, name, email, password) {
  this.username = username;
  this.name = name;
  this.email = email;
  this.password = password;
  this.sayHi = function() {
    return 'Hello, my name is {{name}}';
  };
}

function addPrototypeMethod(Constructor) {
  Constructor.prototype.sayHi = function() {
    return 'Hello World!';
  };
}

function addReverseString() {
  String.prototype.reverse = function() {
    return this.split('').reverse().join('');
  };
}
// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
