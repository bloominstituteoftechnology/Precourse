```js
function outerFunc(x, cb) {
    const innerFunc = function () {
        return cb(x);
    }

    return innerFunc;
}

const resultFunc = outerFunc(5, console.log);

resultFunc();
```

======

Imagine you're humming along writing the below:

```js
function addTwo(x) {
    return x + 2;
};

function addFour(x) {
    return x + 4;
};

function addTen(x) {
    return x + 10;
}
```

You realize you're repeating yourself more often than you'd like. Is there a better way to do the above?

One way is to simply have an `add` function.

```js
function add(x, y) {
    return x + y;
}
```

But what about if you need an `addTwo` function or `addFour` function? What about if the code needs to be in that style?

```js
function createAdder(y) {
    return function(x) {
        return x + y;
    }
}

// Now you can do this:

const addTwo = createAdder(2);
const addFour = createAdder(4);
const addTen = createAdder(10);

addTwo(10); // -> 12
addFour(10); // -> 14
addTen(10); // -> 20
```

This is calld **currying**.

======

```js
const number = 5;

function addNumber(x) {
  return x + number;
}

addNumber(3); // -> 8
```

This works. `number` is not defined within `addNumber`, but it is defined outside in the root scope. If a variable definition, or whatever the function needs, is not in the function itself, it can look one level outside.

```js
function addNumber(x) {
  const number = 5;
  console.log(number); // -> 5
  return x + number;
}

addNumber(3); // -> 8 (Still works!)

console.log(number); // number is not defined
```

Variables needing a definition can look *out* to aether, but **the reverse is not true**. (*This is considered to be a good thing.*)

Keywords `arguments` and `this` have meaning within a functional scope. If you try to use them outside of it, JS has no idea what you're talking about.

@30:00 (Closure explanation)

```js
function getContact(firstName, lastName) {
    return {
        first: firstName,
        last: lastName,
    };
};

getContact('Ron', 'Lebagel');
getContact('Langke', 'Lebagel');
getContact('Maize', 'Lebagel');
```

This seems to be a job for currying.

```js
function createFamily(lastName) {
    return function(firstName) {
        return {
            first: firstName,
            last: lastName,
        };
    };
}
```

It seems like closure references the idea of "looking out (*to the parent scope*)". In the above example, the inner function doesn't have a lastName parameter. By itself, you would have problems. But in this case, there's no problem because the outer function ...provides closure? That is, the outer function provides the info the inner function needs.

Moreso, even if the outer function, which has these parent scope definitions, gets run and doned, the inner function continues to have access to the definitions.