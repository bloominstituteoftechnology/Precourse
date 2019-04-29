// Do not change any of the function names

function getBiggest(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

function greeting(language) {
    var greet = '';
    if (language === 'German') {
        var greet = 'Guten Tag!';
    } else if (language === 'Mandarin') {
        var greet = 'Ni Hao!';
    } else if (language === 'Spanish') {
        var greet = 'Hola!';
    } else {
        var greet = 'Hello!';
    }
    return greet;
}

function isTenOrFive(num) {
    if (num === 10 || num === 5) {
        return true;
    }
    return false;
}

function isInRange(num) {
    if (num < 50 && num > 20) {
        return true;
    }
}

function isInteger(num) {
    if (Math.floor(num) === num) {
        return true;
    }
    return false;
}

function fizzBuzz(num) {
    var phrase = '';
    if (num % 3 === 0) {
        var phrase = phrase + 'fizz';
    }
    if (num % 5 === 0) {
        var phrase = phrase + 'buzz';
    }
    if (phrase !== '') {
        return phrase;
    }
    return num;
}

function isPrime(num) {
    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    if (num <= 0) {
        return false;
    } else if (num === 1) {
        return false;
    }
    return true;
}



// Do not modify code below this line.
// --------------------------------

module.exports = {
    getBiggest,
    greeting,
    isTenOrFive,
    isInRange,
    isInteger,
    fizzBuzz,
    isPrime,
};