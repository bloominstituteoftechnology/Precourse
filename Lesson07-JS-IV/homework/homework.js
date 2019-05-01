// Do not change any of the function names

function makeCat(name, age) {
    const cat = {
        name: name,
        age: age,
        meow: function() {
            return 'Meow!';
        },
    };
    return cat;
}

function addProperty(object, property) {
    const value = property;
    object[value] = null;
    return object;
}

function invokeMethod(object, method) {
    const func = method;
    object[func]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
    let product = mysteryNumberObject.mysteryNumber * 5;
    return product;
}

function deleteProperty(object, property) {
    const value = property;
    delete object[value];
    return object;
}

function newUser(name, email, password) {
    const user = {
        name: name,
        email: email,
        password: password,
    };
    return user;
}

function hasEmail(user) {
    if (!user.email || user.email === '') {
        return false;
    }
    return true;
}

function hasProperty(object, property) {
    const val = property;
    if (object[val]) {
        return true;
    }
    return false;
}

function verifyPassword(user, password) {
    if (user.password === password) {
        return true;
    }
    return false;
}

function updatePassword(user, newPassword) {
    user['password'] = newPassword;
    return user;
}

function addFriend(user, newFriend) {
    user['friends'].push(newFriend);
    return user;
}

function setUsersToPremium(users) {
    for (let i = 0; i < users.length; i++) {
        users[i].isPremium = true;
    }
    return users;
}

function sumUserPostLikes(user) {
    let sum = 0;
    for (let i = 0; i < user.posts.length; i++) {
        sum = sum + user.posts[i].likes;
    }
    return sum;
}

function addCalculateDiscountPriceMethod(storeItem) {
    storeItem.calculateDiscountPrice = function() {
        let discountPrice = storeItem['price'] - (storeItem['price'] * storeItem['discountPercentage']);
        return discountPrice;
    };
    return storeItem;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
    makeCat,
    addProperty,
    invokeMethod,
    multiplyMysteryNumberByFive,
    deleteProperty,
    newUser,
    hasEmail,
    hasProperty,
    verifyPassword,
    updatePassword,
    addFriend,
    setUsersToPremium,
    sumUserPostLikes,
    addCalculateDiscountPriceMethod,
};