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

              User.prototype.sayHi = function() {
                    return 'Hello, my name is' + this.name;
              };
              return User;
            }





function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
          Constructor.prototype.sayHi = function() {
            return 'Hello World!';
          };
          return Constructor;

}


// 1) Write a method which reverses a string.
// 2) Package it up as a class.
// Do them in this order. First write a method which reverses a string, 
// using the input String as a parameter and which returns the reversed String. 

// // Then you need to package this as a class. Create a “ReverseString” class. 
// Have the constructor pass the input String as a parameter. Then slightly rewrite
//  the method that you created in Step 1 to use an instance variable for the reverse 
//  function instead of passing it as an argument and include it as a method in the 
//  ReverseString class.

function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // you will need to use 'this' inside of reverse
            // String.prototype.reverse = function () {
            //       this.string = this.string;
            //       var splitIt = this.string.split('');
            //       var reverseIt = splitIt.reverse();
            //       var joinIt = reverseIt.join('');

            //       return joinIt;
            // };
        String.prototype.reverse = function() {
          return this.split('').reverse('').join('');
          
        };

      }



// Do not modify code below this line.
// --------------------------------













module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
