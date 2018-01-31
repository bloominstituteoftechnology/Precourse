//Feynman Writing Prompts - Day 5 Lesson

//Callback Functions: A very important concept in Javascript is the ability 
//to pass a function as an arguments to another function. These functions are 
//called `callbacks`. These functions can be called anytime and passed arguments 
//within the function.Convention is to use the `cb` argument variable as your 
//callback.
//EXAMPLE: function saysHelloToUser(user){
        //return 'Hello ' + user + '!';}

    //function saysGoodbyeToUser(user){
        //return 'Goodbye ' + user + '!';}

    //function createGreeting(user, cb){
        //return cb(user)}

    //createGreeting("Dan", saysHelloToUser) //'Hello Dan!'
    //createGreeting("Dan", saysGoodbyeToUser) //'Goodbye Dan!'


//'Arguments': When we pass arguments to a function they are contained in an 
//array-like data structure called `arguments`. `arguments` is available to us 
//anywhere within the function and contains all of the arguments passed to it. 
//While it is array like, it does not have all of the properties of an array. 
//One property it does have is the method `.length`. When we are given a 
//function with an unknown number of arguments, we can use .length and a for 
//loop to iterate over all of the arguments:

//function sumAllTheNumbers(){
    //let sum = 0;

    //for(let i = 0; i < arguments.length; i++){
        //sum = sum + arguments[i];}

    //return sum;}

//sumAllTheNumbers(2,5,3,4,7,9,1,0,7,7,7)  //52


//'Prototype': Creating functions are expensive (in a computer memory way) 
//and each time we create a new class object with methods we are recreating 
//those methods in memory. You can imagine if you are creating thousands of 
//class objects from a class with dozens of methods on it, the memory will add 
//up quickly (20,000-40,000 methods). Classes have a unique way of setting a 
//method once and giving every object of that class access to those methods. 
//This is called the `prototype`. Each class has a prototype property, which we 
//can then set methods on:

//EXAMPLE:
//function User(name, github){
    //this.name = name;
    //this.github = github;}

//User.prototype.introduction = function(){
    //return 'My name is ' + this.name + ', my github handle is ' + this.github 
    //+ '.';}

//let dan = new User('Dan', 'tetondan');
//let riley = new Cat('Riley', 'rileyriley');

//console.log(dan.introduction()); //My name is Dan, my github handle is 
//tetondan.
//console.log(riley.introduction()); //My name is Riley, my github handle is 
//rileyriley.

//Protoype methods DO have access to the `this` keyword, and just as before, 
//it will always point to the object (left of the dot) that is calling it. 


//Constructors: The constructor method is a special method for creating and 
//initializing an object created within a class.
//EXAMPLE: class Polygon {
  //constructor() {
    //this.name = "Polygon";
  //}
//}

//var poly1 = new Polygon();

//console.log(poly1.name);
// expected output: "Polygon"