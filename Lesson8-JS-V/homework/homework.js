// Do not change any of the function names

function createUserClass() {
  function User(options){
    this.username = options.username;
    this.name = options.name;
    this.email = options.email;
    this.password= options.password;
  }
  User.prototype.sayHiMethod = function(){
    return 'Hello, my name is ' + this.username;
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
    let reverseString = '';
    for (var i = this.length - 1; i >= 0; i--) { 
      reverseString += this[i]
    }
    return reverseString;
  }
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
