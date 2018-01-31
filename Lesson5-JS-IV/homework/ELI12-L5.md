# ELI12 - Lesson 5
 
### Feynman Writing Prompts
 
1. Callback Functions

- pass a function as an argument to another function 
- used with different 'helper' methods on arrays
- 'forEach' is a callback function
- 'map' will allow you to create a new array after iterating over each array item
- 'reduce' combines items as it iterates over them in an array

Example: 

```
const names = ['Ben', 'Austen', 'Karen', 'Jocelyn'];

names.forEach(function(name, i) {
  console.log(name, i);
});

// use instead of writing for loops
// can use forEach when iterating over arrays
// this prints each name on one line with an index number after it

const modifiedNames = names.map(function(name) {
  return name + '!';
});

console.log(modifiedNames); // will now return 'name!' for each person
```

Example with `reduce`:

```
let nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

let sums = nums.reduce( function(acc, item){
  return acc + item;
})

console.log(sums); // returns '45'

```

2. `arguments`

- array-like data structure
- **automatically created when you create a function**
- used when passing arguments to a function
- has the property 'method' of `.length`
- can use `.length` and a `for` loop to iterate over all of the arguments 

Example:
```
function sumAllTheNumbers(){
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
};

console.log(sumAllTheNumbers(2,5,3,4,7,9,1,0,7,7,7)); // 52

```

3. `prototype`

- give every object within a class access to the same methods
- every class has a `prototype` property by default
- e.g. `User.prototype.introduction = function(){};`

4. Constructors

- provides instructions to the Class to tell it how to build an object

5. Other Notes

- `console.log(typeof 'hello');` returns `string` as the type
- `console.log(typeof true);` returns `boolean`
- `NaN === NaN` returns `false`

6. Classes

- a template for creating objects more easily
- class must use cap-first-letter, e.g. "User", not 'user'.
- when creating a new object referencing the class, do `new User()`

Example:

```
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  printEmail() {
    console.log(this.email);
  }
}

const user = new User('abc@abc.com', 'password');

console.log(user); // should print whole User object
user.printEmail(); // returns "abc@abc.com"
```
