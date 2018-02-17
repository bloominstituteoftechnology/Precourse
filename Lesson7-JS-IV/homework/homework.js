// Do not change any of the function names

function makeCat(name, age) {
  const cat = {
    name: name,
    age:  age,
    meow: function() {
    return 'Meow!';
  }
};
    return cat;
}

function addProperty(object, property) {
  object[property] = null;
  return object;
}

function invokeMethod(object, method) {
  object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  return (mysteryNumberObject.mysteryNumber * 5);
}

function deleteProperty(object, property) {
  delete object[property];
  return object;
}

function newUser(name, email, password) {
  const object = {
    name: name,
    email: email,
    password: password,
  };
  return object;
}

function hasEmail(user) {
  if (user.email) {
    return true;
  } else {
    return false;
  }
}

function hasProperty(object, property) {
  if (object[property]) {
    return true;
  } else {
    return false;
  }
}

function verifyPassword(user, password) {
  if (user.password === password) {
    return true;
  } else {
    return false;
  }
}

function updatePassword(user, newPassword) {
  user.password = newPassword;
  return user;
}

function addFriend(user, newFriend) {
  user.friends.push(newFriend);
  return user;
}

function setUsersToPremium(users) {
  for (let key in users) {
    users[key].isPremium = true;
  }
  return users;
}

function sumUserPostLikes(user) {
  let sum = 0;
  for (let x = 0; x < user.posts.length; x++) {
    sum = sum + user.posts[x].likes;
  }
  return sum;
}

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function () {
    let discount = (storeItem.price * storeItem.discountPercentage);
    this.discountPrice = (storeItem.price - discount);
    return this.discountPrice;
  };
  return storeItem;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod,
};
