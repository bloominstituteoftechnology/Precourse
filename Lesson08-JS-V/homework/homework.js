// Do not change any of the function names

function createUserClass() {
     // create an ES6 class or a constructor function called User
  function User(options) {// it should accept an options object with 
     // username, name, email, and password properties
    this.username = options.username; // in the constructor set the username 
    this.name = options.name; // name
    this.email = options.email; // email
    this.password = options.password; // and password properties
  }
  // the constructor should have a method 'sayHi' on its prototype 
  //that returns the string 'Hello, my name is {{name}}'
  User.prototype.sayHi = function () {
    return 'Hello my name is' + this.name; // {{name}} should be the name set on each instance
  };
  return User; // return the class                                    

}

function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  Constructor.prototype.sayHi = function() {
    return 'Hello World!';
  };
  // the method should be called 'sayHi' and should return the string 'Hello World!'
}

function addReverseString() {
  // add a method to the string constructor's prototype 
  String.prototype.reverse = function () { // name this method reverse
    // that returns a reversed copy of the string   
    let reverseString = '';
    for (var i = this.length - 1; i >= 0; i--) {
      this.reverseString += this[i]; // you will need to use 'this' inside of reverse
    }
    return reverseString;  
};
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};