# Lesson 5: Javascript IV (Advanced Javascript)
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Undefined and Null
* Truthiness
* Arguments object
* Callbacks
* More Array Methods
* Classes
* Prototype

## Advanced Javascript

We have come a long way since our humble beginnings learning how to create variables just 3 lessons ago. In this lesson we will go over some advanced Javascript concepts. This lesson is meant to act as an introduction to these concepts, a starting point. We do not expect you to have these concepts fully memorized and ready to execute. We want to plant a seed and the more you work with Javascript the more that seed will grow and these concepts will make sense. Do not stress if these concepts feel very foreign and tough to grasp, they are that way for everyone. Have fun, and enjoy your Javascript journey. 

## Undefined and Null

There are a couple of Javascript objects that don't really fit into any type. Those are the values `undefined` and `null`. You will get `undefined` when you are looking for something that does not exist, a key on an object, an index in an array, a variable that does not exist. `undefined` simply means what you are asking for does not exist. 

```javascript
    let arr = [1, 2];
    let obj = {
        name: "Dan"
    }

    arr[3] //undefined
    obj.email //undefined
    console.log(unkownVar) //undefined
```

`null` is an object that we, the developers, set when we want to tell other developers that the item they are looking for exists, but there is no value associated with it. While `undefined` is set by the Javascript language, `null` is set by a developer. If you ever receive `null`, know that another developer set that value to `null`

```javascript
    let obj = {
        name: "Dan",
        phoneNumber: null
    }

    obj.phoneNumer //null
```

One last thing to note, neither `undefined` nor `null` are strings, they are written just as they are with no quotes around them, like a boolean.

## Truthiness

In these lessons we have talked a lot about the boolean values, true and false. When using an if statement or another statement that expects a boolean value (such as the !, NOT), and the expression given is not a boolean value, Javascript will do something called type coercion and transform whatever it is given to a boolean value. This is known as truthy and falsey. Every data type has a truthiness to it. Here are some examples:

```javascript
    //items that are coerced to true
    true 
    1
    ' '
    []
    {}
    function(){}

    //items that are coerced to false
    false
    0
    undefined
    null
    ''
```

## Arguments object

When we pass arguments to a function they are contained in an array-like data structure called `arguments`. `arguments` is available to us anywhere within the function and contains all of the arguments passed to it. While it is array like, it does not have all of the properties of an array. One property it does have is the method `.length`. When we are given a function with an unknown number of arguments, we can use .length and a for loop to iterate over all of the arguments:

```javascript
    function sumAllTheNumbers(){
        let sum = 0;

        for(let i = 0; i < arguments.length; i++){
            sum = sum + arguments[i];
        }

        return sum;
    }

    sumAllTheNumbers(2,5,3,4,7,9,1,0,7,7,7)  //52
```

## Callbacks

A very important concept in Javascript is the ability to pass a function as an arguments to another function. These functions are called `callbacks`. These functions can be called anytime and passed arguments within the function. We will soon discover why callbacks are so important to Javascript. Convention is to use the `cb` argument variable as your callback.

```javascript
    function saysHelloToUser(user){
        return 'Hello ' + user + '!';
    }

    function saysGoodbyeToUser(user){
        return 'Goodbye ' + user + '!';
    }

    function createGreeting(user, cb){
        return cb(user)
    }

    createGreeting("Dan", saysHelloToUser) //'Hello Dan!'
    createGreeting("Dan", saysGoodbyeToUser) //'Goodbye Dan!'
```

## More Array Methods

We already know about and use array methods, .push, .pop, .shift, .unshift, and .length. But there are a lot more methods available to us natively on an array. The methods we are going to talk about here are called higher order methods, because they take callbacks as arguments. 

### .forEach

`.forEach` is a built in for loop on every array. `.forEach` takes a callback as its only argument, and iterates over every item in the array and calls the callback on it. The callback can take two arguments, the first is the item itself, the second is the index of the item, this argument is optional. 

```javascript
    let cars = ['Ford', 'Chevrolet', 'Toyota', 'Tesla'];

    //We can write the callback function itself in the parentheses as an anonymous function
    cars.forEach(function(item, index){
        console.log(item);
    })

    //Or we can instantiate a function to be used as a callback.
    //Also, we do not need to use the index argument, if you don’t need it, feel free to leave it out.
    function printNames(item){
        console.log(item);
    }

    //And call that function in the forEach parentheses
    cars.forEach(printNames);
```

### .reduce

`.reduce` will run a loop on our array with the intention of reducing each item into one item that is returned. As it's first argument it takes a callback that takes two arguments, first an 'accumulator' (the result of the reduce method until now), and the second is the item it is currently on. The callback must ALWAYS contain a return statement. Reduce also takes an optional second argument, which would be the starting accumulator. If the starting accumulator is not supplied reduce will start at the first item of the array. `.reduce` will always return the accumulator when it is done iterating through the items.

```javascript
    let nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let words = [ 'Hi,', 'my', 'name', 'is', 'Dan']

    //We can write the anonymous function directly into the .reduce parentheses
    //If we leave out the starting item, it will always start at the first item.
    let sums = nums.reduce( function(acc, item){
        return acc + item;
    })

    //We can write a function outside of the .reduce parens (to be used multiple times later)
    function multiplyTwoNumbers(a, b){
        return a * b
    }
    let products = nums.reduce(multiplyTwoNumbers)

    //.reduce works on any data types. 
    //In this example we set a starting accumulator
    let sentence = words.reduce(function(acc, item){
        return acc + ' ' + item;
    }, 'Sentence:')

    console.log(sums) //45
    console.log(products) //362880
    console.log(sentence) //'Sentence: Hi, my name is Dan'
```
### .map

`.map` is used when we want to change every item in an array in the same way. `.map` takes a callback as its only argument. Like the `.forEach` method, the callback has the optional arguments item and index. Unlike `.reduce`, `.map` will return the entire array.

```javascript
    let nums = [2, 3, 4, 5]

    function multiplyByThree(item){
        return item * 3
    }


    let double = nums.map(function(item){
        return item * 2
    })

    let triple = nums.map(multiplyByThree)

    console.log(double) //[ 4, 6, 8, 10 ]
    console.log(triple) //[ 6, 9, 12, 15 ]
```

## Classes

Often times when we create an object, we are creating a template. Rather than copy that template over and over again, Javascript gives us access to what we call a constructor or `class`. Classes share much of the same functionality as regular objects, but also expands on that functionality greatly. Classes are useful for creating many objects that share some of the same properties and methods (such as users on a website).

### Class and Pseudo Classical Instantiation

If you have experience in an Object Oriented language (such as Java or C#) you are probably familiar with the concept of classes. While Javascript does not provide a 'true' class system, there is something very familiar. For the sake of argument we will call our class objects 'classes'. It is instantiated in a Pseudo Classical way, using the `new` keyword, and can take arguments. 

In this example we will be creating a `Cat` class. Convention for classes is to give the name of anything that can be instantiated with the `new` keyword an uppercase name. When we use the `new` keyword, Javascript does some great behind the scenes work for us and creates and returns an object automatically.

```javascript
    function Cat(name){
        //the new operator creates an object, 'this'
        this.name = name
        this.meows = function(){
            return 'My name is ' + this.name + " ...Meow!";
        }
        //return the object 'this'
    }

    let sam = new Cat('Sam')
    let kitty = new Cat('Kitty')
    console.log(sam.meows()) //My name is Sam ...Meow!
    console.log(kitty.meows()) //My name is Kitty ...Meow!

``` 

### `this` in Classes

The `this` keyword can start to become very confusing when we start using it in classes. In the last example we use it in the meows method. A good rule of thumb if you are not certain what `this` is referring to, is to look at where the method is called, and the object to the left of the 'dot'. That is the object `this` refers to. 

## Prototype

Creating functions are expensive (in a computer memory way) and each time we create a new class object with methods we are recreating those methods in memory. You can imagine if you are creating thousands of class objects from a class with dozens of methods on it, the memory will add up quickly (20,000-40,000 methods). Classes have a unique way of setting a method once and giving every object of that class access to those methods. This is called the `prototype`. Each class has a prototype property, which we can then set methods on:

```javascript
    function User(name, github){
        this.name = name;
        this.github = github;
    }

    User.prototype.introduction = function(){
        return 'My name is ' + this.name + ', my github handle is ' + this.github + '.';
    }

    let dan = new User('Dan', 'tetondan');
    let riley = new Cat('Riley', 'rileyriley');
    
    console.log(dan.introduction()); //My name is Dan, my github handle is tetondan.
    console.log(riley.introduction()); //My name is Riley, my github handle is rileyriley.

``` 
Protoype methods DO have access to the `this` keyword, and just as before, it will always point to the object (left of the dot) that is calling it. 

## Please open the homework folder and complete the assignment described in the README file

## Extra credit. 

* Read this article to get aquainted with a high level concept called "Closures": [Understand Closures with Ease](http://javascriptissexy.com/understand-javascript-closures-with-ease/)
* Read and familiarize yourself with the computer science concept of 'Recursion'.

## Additional Resources:

* [Understanding Callback Functions and How to Use Them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
* [Eloquent Javascript: Higher Order Functions](https://eloquentjavascript.net/05_higher_order.html)
* [MDN: Arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
* [MDN: Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
* [MDN: Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [MDN: Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)