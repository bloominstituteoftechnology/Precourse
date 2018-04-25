// Do not change any of the function names


const User = function (username, name, email, password){
  this.username = username;
  this.name = name;
  this.email = email;
  this.password = password;
};
const user = new User('SunJieMing', 'Ben', 'ben@lambdaschool.com', 'LS Rocks!');
  console.log(user);



const User = function (username, name, email, password){
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
console.log(user);
 //add a method to the constructor's prototype
//the method should be called 'sayHi' and should return the string 'Hello World!'



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
    console.log(user);
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
