# Feynman Writing Prompts

## Concept Explanations

1. Variables- This is basically a container for storing data values. Variables are assigned names then an assignment operator then a value. 
ex. `var x = 1;`
* `var` is the statement
* `x` is the name
* `=` is the operator
* `1` is the value, in this case a number
* `;` is the closer 
There are newer variables instead of `var`, to name a few there is the newer `let` and `const` variables. In the updated form `let` usually now replaces the older `var` and `const` is more for when something is set and constant such as storing passwords or usernames etc. 
----
2. Strings- These are really just a series of text between two quotation marks, be it single quotes or double quotes. 
ex. `const favoriteFood = 'taco';`
----
3. Functions- These are basically a block of code designed to perform a particular task. A JS function is executed when "something" invokes it (calls it). The syntax for it is defined with the __function__ keyword, followed by a __name__, follwed by parentheses __()__. 
* Function names can contain letters, digits, underscores, and dollar signs (same rules as variables). The parentheses may include multiple __argument__ names separated by commas: (argument1,argument2,...)
ex. 
`function myFunc(firstNum,secondNum) { console.log(firstNum + secondNum); }`
then run `myFunc(1,1);`
* If you want something to come out of your function and actually use it you have to use something called __return__. ^^in the case above the output will return 2.
* **NOTE** Function Scope says any variables created within the `{}` is untouchable unless you return it, the return statement is also the final line in the function.
----
4. `if` Statements- this goes along with something called control flow and comparison operators.
* Control flow: if, else, elseif.
ex.
`const num = 10;`
`if(num > 10){`
    `console.log('is` `greater than 10')`
`}`
`Terminal => false`
* Some comparison operators include: `>, >=, <, <=, ===, !==`
----
5. Boolean Values- (`true`, `false`) come from low level CS. Can include true, false, on or off, 1 or 0. 
ex. `const lovesJavascript = true;` / `const hatesJavascript = false;`