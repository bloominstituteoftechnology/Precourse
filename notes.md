
```javascript
console.log('lets go!')

var name = 'Keegan';
let lastName = 'Burkett'
const lovesJS = true //boolean
console.log('My name is ' + name + ' ' + lastName)

const noChange = 'I cant change';//handy with big programs

console.log(noChange)


// single equals sign(=) means assignment

//string any block of text

//let is es6 way of variable declaration

//const variables cannot be changed

//primative data types: strings,numbers, booleans, null,  undefined, symbols

//modulus is handy at getting at odd and even values

//built in js objects console (log is the method on the console object, the method is essentially a function within an object), math
const something = ['hey', 'whats', 'up']

const nothing = []


for (var i = 0; i < something.length; i++) {
  nothing.push(something[i]);
}

console.log(nothing)

//functions are like variable

function myFunc() {
  const fNum = 23;
  const lNum = 234;
  console.log('The total of this num is '+ (fNum + lNum))
}

myFunc();

//dry code, dont repeat yourself

const myAge = 19;

const someAge = 13;

function canIDrive(userAge) {
  if(userAge < 16) {
    console.log('you caint drive b')
  }
  if (userAge > 16) {
    console.log('congrats you can drive')
  }
  else {
    console.log('youve been driving.')
  }
}

canIDrive(someAge);

//for loop, the starting point (innitialize the variable )
//the condition statement
//something to do every time the loop is return
//basic for loop:
for(let i = 0; i <= 10; i++) {
  console.log(i)
}

//arguments object
function addsNumbers(a,b) {
  console.log(arguments)
}
