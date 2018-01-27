// Do not change any of the function names

// Creates a cat object
function makeCat(name, age) {
  let cat =  {
    meow: function() {
      return 'Meow!';
    }
  };

  cat.name = name;
  cat.age = age;

  return cat;
}

// Adds property as null to object
function addProperty(object, property) {
  object[property] = null;
  return object;
}

// Invokes method from object
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

// Creates a new object with name, email, and password, then returns it
function newUser(name, email, password) {
  let newUserObj = {};

  newUserObj.name = name;
  newUserObj.email = email;
  newUserObj.password = password;

  return newUserObj;
}

function hasEmail(user) {
  if (user.email) {
    return true;
  } else {
    return false;
  }
}

function hasProperty(object, property) {
  for (let key in object) {
    if (key === property) return true;
  }

  return false;
}

function verifyPassword(user, password) {
  return user.password === password;
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
    sum += user.posts[i].likes;
  }

  return sum;
}

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function() {
    return (storeItem.price * (1 - storeItem.discountPercentage));
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
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
