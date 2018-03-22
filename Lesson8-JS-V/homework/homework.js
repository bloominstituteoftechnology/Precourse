// Do not change any of the function names

function createUserClass() {
  function User({username, name, email, password}) {
    this.username = username;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  User.prototype.sayHi = function () {
    return 'Hello, my name is ' + this.name;
  };

  return User;
  // create an ES6 class or a constructor function called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the class
}

function addPrototypeMethod(Constructor) {
  Constructor.prototype.sayHi = function(){
    return 'Hello World!';
};
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
}

function addReverseString() {
  String.prototype.reverse = function(){
    let string1 = '';
    for(let i = this.length -1; i > -1 ; i--){
      string1 += this[i];
    }
    return string1;
};
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
