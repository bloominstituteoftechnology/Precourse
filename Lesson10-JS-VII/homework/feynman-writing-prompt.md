## Feynman Writing Prompts 

Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* Closure

### What is Closure?

In order to talk about closure, we have to talk about scope first. Scope refers to the area where variables have meaning. Let's try to explain it this way:

```js
let truantVar = "is up to no good";

function classroomA() {
    let learningVar = "is a good student";
    // Example A
    console.log(truantVar); // -> "is up to no good"
}

function classroomB() {
    let boredVar = "is dozing off";
    // Example B
    console.log(boredVar); // -> "is dozing off"
    console.log(learningVar); // -> undefined
}
// Example C
console.log(boredVar); // -> undefined
console.log(truantVar); // -> "is up to no good"
```

In the code above, we have a bunch of variables at school. `learningVar` and `boredVar` are in function "classrooms", while `truantVar` is just running around the hallways being a bad variable.

In `// Example A`, if we do the `classroomA` function and console log the value of `truantVar`, we'll get its value, `"is up to no good"`. In this case, the teacher can go out of the function and into the hallway for a bit, grab the bad variable, and ask what its value is.

But in `// Example B`, if you try to do the `classroomB` function and console log the value of `learningVar`, you get `undefined`. The teacher can go out into the hallway, but they can't go into another "classroom" (function) and get to the student in there. This school has a strict "Do Not Disturb" policy: you can't yank variables out of other functions and ask them what they are. However, `boredVar` is inside `classroomB`, so the teacher can ask its value no problem, though the teacher might be disappointed to find out that its value `= "is dozing off"`.

The same thing is happening in `// Example C`. The hall monitor wants to know what the value of `boredVar` is, but `boredVar` is in `classroomB`. Again, this school doesn't like its variables being bothered while in class, so hall monitor is out of luck. However, the monitor can grab the value of `truantVar`, because it's just hanging out at the lockers in the hallway.

To summarize this long-winded example, variables have an area which they are relevant to. If you put variables in the hallway, or the root scope, they are just hanging out and can be called upon by any function. However, in functions, variables declared in functions are only relevant to the function itself, so trying to get to them outside of the function results in `undefined`. That means accessing them from the wrong function doesn't work, nor does accessing them in the root scope neither. Another way of saying is that functions go out to the scope just outside of them if they need a variable definition, but you can't do the reverse. 

This behavior might seem unintuitive and weird at first, but it's actually a good thing, because truant variables can do bad things. They might end up in the wrong classroom and muck up the activities there. Or they might hang with a bad crowd, and peer pressured to do bad things like "count to infinity" or something. In other words, limiting the scope, which is the area in which they can be defined and accessed, reduces the possibility that variables might be inadvertently changed or reassigned somewhere else and break the whole program. 

### Can we talk about Closure now?

Yes, we can. Closure is just another discussion about scope, though now we forget the hallways of root scope and focus on the function itself.

```js
function classroomX () {
    let studentA = 35;
    return function() {
        let studentB = 34;
        return studentA + studentB; 
    }
}

const whatAreTheyDoing = classroomX();
whatAreTheyDoing();
```

In `classroomX`, there's a class activity where students are pairing up and summing themselves together. If you look at the return function in `classroomX`, you can see that it's meant to return `studentA + studentB`. However, `studentA` is not with `studentB`, that is, `studentA` is not defined within the function. 

If we had the inner return function by itself, we'd have an error. But in this case, everything works just fine. This is because even though `studentA` is not in the function with `studentB`, it is in the "classroom", that is the outer function. Just like how the function can go into the hallway and grab variables hanging out there in the previous example, the return function can get `studentA` hanging out in `classroomX` to complete the activity.

The idea of getting information in this way inside a function is called "closure". 