# ELI12 - Lesson 4

### Objects:

* uses key-value store for data to group values under the same entity
* strings not wrapped in quotes
* comma-separated list of strings
* all keys must be unique; no duplicate
* arrays, functions, everything is an object in JS
* you can have objects embedded in other objects as well
* if you want a user to have two 'email' fields, you must name them differently
* for multiple users, create separate objects if using the same property fields

e.g.

```
const user = {
  email: 'asdf@asdf.com',
  password: 'asdfasdf',
  isAdmin: true,
  // duplicate key _ email: 'abcd@abcd.com', _
  friends: [], # array
  location: {
    timezone: 'GMT - 6',
    address: '123 something st',
    state: 'CA',
  },
};
```

### Properties:

* user.age contains the property 'age' for the user
* user.location.timezone indicates the timezone property of the location property of the user object
* properties can be referenced and modified later in the program: e.g. `user.age++;`; e.g. `console.log(user1.email);`
* if you are passing a property as a function, or iterating over a property, you might want to reference it in this way: `console.log(user1['email']);`
* you can include functions as a part of an object: `const user = { sayHi: fuction(message) { console.log(message); }, };`; `user.sayHi('Hello!');`

### Methods:

A function on an object is a method.

For example, with `console.log()`, `log` is a method on the `console` object.

#### `this` keyword:

WITHIN an object, `this` automatically sets a variable for you:

```
const user = {
  email: 'mail@mail.com',
  password: 'passwd',
  printEmail: function() {
    console.log(this.email);
  },
};
```

IF you then do `user.printEmail();`, you get back: `mail@mail.com`.

**`this` refers to the _entire_ object.**

- if you have multiple users, you can put them into an array which you definte as `const users`
- you can then return the email address of a user by index number with this: `users[0].printEmail();` or `users[1].printEmail();`

### `for in` loops:

Use `for in` loop to loop over an object:

```
const food = {
  name: 'cucumber',
  type: 'vegetable',
  count: '55,
  location: 'j45',
};
```

This will loop over and print out each property of the object one at a time:

```
for (let key in food) {
  console.log(key);
  console.log(food[key]);
}

```

Make sure you don't do `(food.key)` because it will look for a 'key' named "key".
[Otherwise, you should always use dot-notation; here you can't.]

#### deleting or omitting properties without modifying an object:

```
const animal = {
  name: 'fido',
  species: 'dog',
  age: 5,
  howOld: 5,
};
```

if you want to get rid of a property such as 'howOld', you can use the delete keyword.

`delete animal.howOld();`
`console.log(animal);` will then print the object without the 'howOld' property

---

FINAL TESTS: From the top level of your `Precourse` folder, run `npm run test:JSIII` to run the automated tests. You will fill out the functions in `homework.js` to make the tests pass.
