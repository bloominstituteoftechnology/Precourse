// Do not change any of the function names

function createUserClass() {
  // create an ES6 class or a constructor function called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the class
  var user = function (options) {
    this.username = options.username;
    this.name = options.name;
    this.email = options.email;
    this.password =  options.password;
  };
  user.prototype.sayHi = function (){
    return 'Hello, my name is ' + this.name;
  };
  return user;
}

function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
  Constructor.prototype.sayHi = function (){
    return 'Hello World!';
  };
}

function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
  var revString = function(str)
  {
    this.str = str;
    this.rev_str = '';
  };
  revString.prototype.reverse = function (){
    for ( var i = this.str.length - 1 ; i >= 0 ; i--) {
      this.rev_str += this.str[i];
    } 
    return this.rev_str;
  };
  return revString;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
