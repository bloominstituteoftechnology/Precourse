## What are variables?

Computers do exactly what you tell them to. If you ask them, "What is 2+2?", they will respond "4". And if you ask them, "Add 2 more to that", they'll respond, "Add 2 to what?". The computer won't know what to do because you didn't tell it to remember "2+2". 

You need to tell computers to remember the answer. You do that with variables. A variable is something you tell the computer to remember.

You give variables a name, and the computer recalls it whenever you tell it the name. So you say "`let a = 5;`". The `=` is like "is" or "be". So it's like you're saying, "Hey computer, let `a` be 5, OK?" If the computer is OK with that, you can say "`a;`" later on, and the computer should come back with, "Ah, it's `5`."

Variables can be used to remember lots of things, like numbers, names, sentences, list of phone numbers, or even math problems. 

You can tell the computer your variable other ways too, like with `var` and with `const`. We usually like to use `let` and `const`. 

With `let`, the computer is a little more careful about what to remember:

```js
function nightInVegas() {
	let whatHappensInVegas = 'Stays in Vegas';
	console.log(whatHappensInVegas);
}

whatHappensInVegas;
// -> not defined
```

The memory of `whatHappensInVegas` can only be remembered when it's doing the action, that is, function, `nightInVegas()`. If you ask the computer, "`whatHappensInVegas`?", when it's not doing anything or doing something els, it won't know what you're talking about.


## What are strings?

Strings are 

## What are functions?