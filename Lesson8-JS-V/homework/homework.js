// Do not change any of the function names

function createUserClass() {
  class User {
    constructor(username, name, email, password) {
      this.username = username;
      this.name = name;
      this.email = email;
      this.password = password;
      }
    };
    User.prototype.sayHi= function(){
      return 'Hello, my name is {{this.name}}'
    }
      return this.constructor;
  }
  // create a class constructor called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the constructor


function addPrototypeMethod(Constructor) {
  Constructor.prototype.sayHi= function () {
    return 'Hello World!'
  }
}
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'


  function addReverseString(){

String.prototype.reverse = function() {
  let reverseString = '';
  for(let i = this.length - 1; i >= 0; i--) {
 reverseString += this[i];
}
return reverseString;
}

}


// 
  // add a method to the string constructor's prototype that returns a reversed copy of the strinthig
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse


// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass: createUserClass,
  addPrototypeMethod: addPrototypeMethod,
  addReverseString: addReverseString,
};
