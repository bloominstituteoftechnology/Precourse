# Lesson 8: Javascript V (Classes and Prototype)
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Classes
* `prototype`

## Classes

Often times when we create an object, we are creating a template. Rather than copy that template over and over again, Javascript gives us access to what we call a constructor or `class`. Classes share much of the same functionality as regular objects, but also expands on that functionality greatly. Classes are useful for creating many objects that share some of the same properties and methods (such as users on a website).

### Class and Pseudo Classical Instantiation

If you have experience in an Object Oriented language (such as Java or C#) you are probably familiar with the concept of classes. While Javascript does not provide a 'true' class system, there is something very familiar. For the sake of argument we will call our class objects 'classes'. It is instantiated in a Pseudo Classical way, using the `new` keyword, and can take arguments. 

In this example we will be creating a `Cat` class. Convention for classes is to give the name of anything that can be instantiated with the `new` keyword an uppercase name. When we use the `new` keyword, Javascript does some great behind the scenes work for us and creates and returns an object automatically.

```javascript
    function Cat(name) {
        // the new operator creates an object, 'this'
        this.name = name;
        this.meows = function() {
            return 'My name is ' + this.name + ' ...Meow!';
        }
        // return the object 'this'
    }

    const sam = new Cat('Sam');
    const kitty = new Cat('Kitty');
    console.log(sam.meows()); // 'My name is Sam ...Meow!'
    console.log(kitty.meows()); // 'My name is Kitty ...Meow!'

``` 

### `this` in Classes

The `this` keyword can start to become very confusing when we start using it in classes. In the last example we use it in the meows method. A good rule of thumb if you are not certain what `this` is referring to, is to look at where the method is called, and the object to the left of the 'dot'. That is the object `this` refers to. 

## Prototype

Creating functions are expensive (in a computer memory way) and each time we create a new class object with methods we are recreating those methods in memory. You can imagine if you are creating thousands of class objects from a class with dozens of methods on it, the memory will add up quickly (20,000-40,000 methods). Classes have a unique way of setting a method once and giving every object of that class access to those methods. This is called the `prototype`. Each class has a prototype property, which we can then set methods on:

```javascript
    function User(name, github) {
        this.name = name;
        this.github = github;
    }

    User.prototype.introduction = function(){
        return 'My name is ' + this.name + ', my github handle is ' + this.github + '.';
    }

    let dan = new User('Dan', 'tetondan');
    let riley = new Cat('Riley', 'rileyriley');
    
    console.log(dan.introduction()); // My name is Dan, my github handle is tetondan.
    console.log(riley.introduction()); // My name is Riley, my github handle is rileyriley.

``` 
Protoype methods DO have access to the `this` keyword, and just as before, it will always point to the object (left of the dot) that is calling it. 

## Please open the homework folder and complete the assignment described in the README file

## Additional Resources:

* [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [MDN: Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)