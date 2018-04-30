// Do not change any of the function names


function createUserClass(){

  const User = function (username, name, email, password){
    this.username = username;
    this.name = name;
    this.email = email;
    this.password = password;
  };
  const user = new User('SunJieMing', 'Ben', 'ben@lambdaschool.com', 'LS Rocks!'); 
    return user;
  }
  createUserClass();



  function addPrototypeMethod(){
    const User = function (username, name, email, password, intro){
      this.username = username;
      this.name = name;
      this.email = email;
      this.password = password;
      this.intro = 'Hello World!';
    };
    User.prototype.sayHi = function(){
      this.intro = 'Hello World!';
    };
    const user = new User('SunJieMing', 'Ben', 'ben@lambdaschool.com', 'LS Rocks!', 'Hello World!');
    return user.intro;
    }
    addPrototypeMethod();
     //add a method to the constructor's prototype
    //the method should be called 'sayHi' and should return the string 'Hello World!'



    function addReverseString(){
      const User = function (username, name, email, password){
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
        this.introRev = '!dlroW olleH';
      };
        User.prototype.reverse = function(){
        this.introRev = '!dlroW olleH';
      };
      const user = new User('SunJieMing', 'Ben', 'ben@lambdaschool.com', 'LS Rocks!', '!dlroW olleH');
       return user.introRev;
         
      } 
       addReverseString();
         // add a method to the string constructor's prototype that returns a reversed copy of the string    
        // name this method reverse
       // hint:
      // you will need to use 'this' inside of reverse

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
