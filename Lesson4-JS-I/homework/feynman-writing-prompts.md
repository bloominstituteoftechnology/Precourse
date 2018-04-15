## What are variables?

Computers do exactly what you tell them to. If you ask them, "What is 2+2?", they will respond "4". And if you ask them, "Add 2 more to that", they'll respond, "Add 2 to what?". The computer won't know what to do because you didn't tell it to remember "2+2". 

You need to tell computers to remember the answer. You do that with variables. A variable is something you tell the computer to remember.

You give variables a name, and the computer recalls it whenever you tell it the name. So you say "`let a = 5;`". The `=` is like "is" or "be". So it's like you're saying, "Hey computer, let `a` be 5, OK?" If the computer is OK with that, you can say "`a;`" later on, and the computer should come back with, "Ah, it's `5`."

Variables can be used to remember lots of things, like numbers, names, sentences, list of phone numbers, or even math problems. 

## What are strings?

A string is simply a bunch of characters, surrounded by marks like `""` or `''`. The bunch of characters can be names (*'Ronald'*), phone numbers (*'310-555-1256'*), or a mixture of letters, numbers, and other characters you so desire. 

If you take a real piece of string and try to cut it in half, or pry apart the threads that hold the string together, you end up with a pile of useless threads of fabric. In a similar way, you cannot break or change strings in Javascript like that. For example, "4" - "2" won't yield much of anything, because the computer treats "4" and "2" as strings, and the computer will generally not try to fray these strings apart. "Ronald" - "Ron" is similar; it won't try to unravel the string. 

With that said, you can:

```js
str = 'Tie ' + 'strings' + ' together'; // 'Tie strings together'
strNum = '4' + '2'; // '42' You're not adding, you're tying strings together
```

But:

```js
strBond = 'You ' * 'cannot ' - 'break ' / 'apart'; // NaN (Not a Number)
```

## What are functions?

Functions are actions the computer performs; they tell the computer to do something. For example, if I go `console.log('Hello');`, I ask the computer to do an action, which is to spit out (*log*, like *to log an entry*) `'Hello'` in the console.

If there is an action that the computer does not know how to do, you can teach it.

```js
function cheerMeUp(name) {
	console.log('Hello, ' + name + '. You are doing well, so do not sweat it. Have a nice day! :)');
}
```

You give the function a name, like `cheerMeUp`. You tell the computer what it needs to know to do the function, like a `(name)` (*a parameter*) in my function. If it doesn't need to know anything to do it, `()` works just fine. You can also put more than one thing it needs to know, and separate them with `,`. Then in the `{}`, you instruct the steps the computer needs to take to do the function, like `console.log()`.

When you want the computer to do the function, you tell the computer the function name and what it needs to know (*an argument*):

```js
cheerMeUp('Amy');
// -> 'Hello, Amy. You are doing well, so do not sweat it. Have a nice day! :)'
```

If you want your function to give you an answer, like the answer to two numbers multiplied together, you ask the computer to `return` it in the function.

```js
function timesTogether(number1, number2) {
	return number1 * number2;
}

timesTogether(5, 10);
// -> 50
```

Instead of doing an big ol' action, it will give you answer, which you can use to do other things, if you'd like. Once the function does a `return`, the computer is done with the function until you tell it to do it again.

## What are `if` statements?

`if` statements are "What if?" questions which you can ask your computer, and depending on the answer, you can tell it to do one thing or another.

```js
function compareNum(num1, num2) {
	if (num1 > num2) {
		return num1 + ' is more than ' + num2;
	} else if (num1 < num2) {
		return num1 + ' is less than ' + num2;
	} else {
		return num1 + ' and ' + num2 + ' are equal';
	}
}

console.log(compareNum(10, 20));
// -> 10 is less than 20 (in the console)
```

The function takes two numbers and asks itself 2 questions. First, "Is the num1 (the first number) greater than num2 (the second number)?". If yes, then it `return`s num1, whatever it is, is more than num2. Since I `return`ed it, the function stops and is done.

But if the answer is no, it asks the second question, "Is num1 less than num2"? If yes, it does what I ask in the `return` then is done. If still no, it skips all that finally does the last `else` statement. 

## What are boolean values `true` & `false`?

Boolean values are like "on/off", as in it can only be one of two values: on or off. In JS, we often interpret on to be `true`, and off to be `false`, but in the language computers speak, on is like `1`, and off is like `0`. While many people have worked hard to make sure that we don't have to tell computers how to do things entirely in ON's and OFF's, it is helpful to sometimes phrase instructions this way so the computer can better understand it.

Often, we use booleans with `if` statements; that is, if something is `true`, we tell the computer to do something, and it it's `false`, we tell it to do something else (if anything at all).