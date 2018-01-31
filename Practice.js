const user = {
        name : 'Dennis',
        age : 35,
        occupation : 'Programmer',
        isSmart: true,
        location: {
            timezone: 'GMT-6',
            address: '123 Main St',
            state: 'CA'
        },
        sayHi: function() {
            console.log(this.name,"says hi!");
        
        }

}

const food = {
    name: 'cucumber',
    type: 'vegetable',
    count: 55
};
for (let key in food) {
    console.log(key,':', food[key])
}



delete user.age;
console.log(user.name, user.age, user.occupation)
console.log(user.location.timezone, user.location.address, user.location.state)
user.age++
console.log(user.name, user.age, user.occupation)
console.log(user['name'],';', user['location']['state'])
user.sayHi()


//console.log(typeof (true));

function foo() {
    console.log(arguments)
}

foo(1,5,'hi', [], {}, NaN, true);

const fool = function() {
    console.log('Hello!');
}

fool();
//console.log(fool(arguments));

let functions = [
    function() {
        console.log('hi!')
    }
]

functions[0]();