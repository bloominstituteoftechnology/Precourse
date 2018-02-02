//Feynman Writing Prompts - Lesson 4

//Objects:An object is a collection of properties, and a property is an 
//association between a name (or key) and a value. 

//Properties:A JavaScript object has properties associated with it. A property 
//of an object can be explained as a variable that is attached to the object. 
//Object properties are basically the same as ordinary JavaScript variables, 
//except for the attachment to objects. The properties of an object define the 
//characteristics of the object. You access the properties of an object with a 
//simple dot-notation: objectName.propertyName


//Methods:JavaScript methods are the actions that can be performed on objects. 
//A JavaScript method is a property containing a function definition. Property.

//for in loop:Javascript has a second type of for loop built in called the 
//"for...in" loop. It is slightly different syntax, it starts the same but in 
//the parentheses we will declare a variable, the keyword 'in', and the name of 
//the object. This will loop over each key in the object and finish when all of 
//the keys have been iterated over. We can use this key, and bracket notation, 
//in our for loop to access the value associated with that key.
//EXAMPLE: let user = {
    //username: "dan.frehner",
    //password: "abc123",
    //lovesJavascript: true,
    //favoriteNumber: 42};

//for(let key in user){
    //console.log(key)
    //console.log(user[key])}

//username
//"dan.frehner"
//password
//"abc123"
//lovesJavascript
//true
//favoriteNumber
//42

//Dot notation vs bracket notation: With dot notation we can just call the 
//object name, a dot, and the key name. Just as we call the .length property 
//on an array (hint: the length property is a key:value pair):
//EXAMPLE: user.lovesJavascript; //true
//user.username;        //dan.frehner

//Bracket notation is just like calling an item on an array, although with 
//brackets we MUST use a string or number, or variable pointing to a string 
//or number. Each key can be called by wrapping it with quotes:

//let passString = "password";
//user["lovesJavascript"]; //true
//user["username"];        //dan.frehner
//user[passString];        //abc123

//In the wild you will see brackets almost always being used with variables. 

//### Assigning Values

//Assigning values works just like accessing them. We can assign them, when 
//we create the object, with dot notation, or with bracket notation:

//let newUser = {
    //isNew: true}

//let loveJSString = "lovesJavascript";

//newUser.username = "new.username";
//newUser["password"] = "12345";
//newUser[loveJSString] = true;