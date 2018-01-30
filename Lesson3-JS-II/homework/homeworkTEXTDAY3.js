//Feynman Writing Prompts - Day 3 Lesson

//'For': The for statement creates a loop that consists of three optional 
//expressions, enclosed in parentheses and separated by semicolons, followed by 
//a statement (usually a block statement) to be executed in the loop.
//EXAMPLE: var str = "";
//for (var i = 0; i < 9; i++) {
    //str = str + i;
  //}
  
//'&&': "AND" operator. It is written with two ampersands (&&). This will 
//evaluate both expressions and will return true if BOTH expressions are true. 
//If one (or both) of them is false this operator will return false:
//EXAMPLE: if (100 > 10 && 10 === 10){
    //console.log("Both statements are true, so this code will be run");}

//if (10 === 9 && 10 > 9){
    //console.log("One of the statements is false, so the && will return false, 
    //this code will not be run");} 

//'||': "OR" operator. It is written with two vertical bars (||). It will 
//determine if one of the expressions is true. It will return true if one 
//(or both) of the expressions is true. It will return false if BOTH expressions 
//are false:
//EXAMPLE: if (100 > 10 || 10 === 10){
    //console.log("Both statements are true, so this code will be run");}

//if (10 === 9 || 10 > 9){
    //console.log("One of the statements is true so the || will return true, 
    //this code will be run");} 

//if (10 === 9 || 1 > 9){
    //console.log("Both of the statements are false, so the || will return false. 
    //This code will not be run.");} 

//'!': "NOT" operator. It is written as a single exclamation mark (!). We saw 
//this operator earlier when determining equality (!==). As before, the NOT 
//operator will return the opposite boolean value of what is passed to it:

//if(!false){
    //console.log("The ! will return true, because it is the opposite of false. 
    //This code will be run");}

//if(!(1 === 1)){
    //console.log("1 does equal 1, so that expression returns true. The ! operator 
    //will then return the opposite of that. This code will NOT run.");}

//'Arrays': storage containers for collections of data. Building an array is 
//simple, declare a variable and set it to []. We can then add however many 
//strings, numbers, or booleans as we want to the container (comma separated), 
//and access those items whenever we want.
//EXAMPLE: let studentsNames = ["Dan", "Maria", "Sara", "Raj"];