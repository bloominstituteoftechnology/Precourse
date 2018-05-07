// Do not change any of the function names

function createUserClass() {
  function User(options, username, name, email, password) {
    this.username = options.username;
    this.name = options.name;
    this.email = options.email;
    this.password = options.password;
  }
  User.prototype.sayHi = function() {
    return `Hello, my name is ${this.name}`;
  };
  return User;
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
