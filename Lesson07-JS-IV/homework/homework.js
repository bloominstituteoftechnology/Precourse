// Do not change any of the function names

function makeCat(name, age) {
  const newObj = {
    'name': name,
    'age': age,
    meow: function() {
      return 'Meow!';
    },
  };
  return newObj;
}

function addProperty(object, property) {
  object[property] = null;
  return object;
}

function invokeMethod(object, method) {
  object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  return mysteryNumberObject.mysteryNumber * 5;
}

function deleteProperty(object, property) {
  delete object[property];
  return object;
}

function newUser(name, email, password) {
  const newObj = {
    'name': name,
    'email': email,
    'password': password,
  };
  return newObj;
}

function hasEmail(user) {
  if (user.email === null || user.email === undefined) {
    return false;
  } else {
    return true;
  }
}

function hasProperty(object, property) {
  if (object[property] === undefined) {
    return false;
  } else {
    return true;
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
    storeItem.discountPrice = storeItem.price - (storeItem.price * storeItem.discountPercentage);
    return storeItem.discountPrice;
  };
  return storeItem;
  //using this
  // storeItem.calculateDiscountPrice = function() {
  //   this.discountPrice = this.price - (this.price * this.discountPercentage);
  //   return this.discountPrice;
  // };
  // return storeItem;
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
