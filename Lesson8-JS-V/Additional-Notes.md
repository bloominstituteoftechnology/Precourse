### Classes

```js
const out = (instruction) => console.log(instruction);

const Assassin = function(codename, weapon, stealthy) {
  this.codename = codename;
  this.weapon = weapon;
  this.stealthy = stealthy;
  this.headCount = 0;
  this.kill = function() {
    this.headCount++;
  };
};

// Arguments in the function serve to establish the values for the properties of the function.
// this.codename means "make a property 'codename' in 'this' (the new object)" The codename after the equals sign stands for the argument the codename parameter accepts (at the top, see?) when the function is called.
// Returns are unneeded in classes. They are implied. (Implicit return in 'new' keyword?)

// Let's make an aassasin!

const ninjaAssasin = new Assassin('Hollow Eyes', 'katana', true);
const mobsterAssassin = new Assassin('Vinnie Moneybags', 'gun', false);
const ghostAssassin = new Assassin('The Wraith', 'spirit magic', true);

// Notice the `new` keyword. Otherwise, making objects from classes is like calling a function.

out(ninjaAssasin);
out(mobsterAssassin);
out(ghostAssassin);

// Did assassins have to be the example? I can't bloody spell it!
```

This method of creating classes is called pseudo-classical instantiation. 

======

While we can set methods with classes, this isn't best practice.
* Every time a new instance of the class is created, you make a copy of that method. In the Assassins example, the `kill()` method is duplicated every time we make a new Assassin. Notice that in all cases, `kill()` is exactly the same.

This is where **`prototype`** comes in.
* It's like a community pool. It contains everything that will be shared with all instances of the class.

```js
const Assassin = function(codename, weapon, stealthy) {
  this.codename = codename;
  this.weapon = weapon;
  this.stealthy = stealthy;
  this.headCount = 0;
//   this.kill = function() {
//     this.headCount++;
//  (We'll move this to the prototype)
  };
};
// We'll add the kill() method to the prototype like this:
Assassin.prototype.kill = function() {
    this.heaadCount++;
};

const ghostAssassin = new Assassin('The Wraith', 'spirit magic', true);

// You can then do
ghostAssassin.kill();
// And it will work like you'd expect. But ghostAssasin object itself doesn't have this method
// kill() is in Assassin.prototype, which all objects born out of the Assassin class have access to.
```

If you have a `kill()` method in the prototype, but then explicitly code a new `kill()` method in either the class or resulting object, that will take precedence over the prototype.

======


Remember the idea that everything is an object? All the methods you use on a lot of these objects, like `slice()` and `reduce()`, are relaxing in the prototype pool!