// Do not change any of the function names

function makeCat(name, age) {
  let cat = {
    name: name,
    age: age,
    meow: function() {
      return 'Meow!';
    },
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
  return mysteryNumberObject['mysteryNumber'] * 5;
}

function deleteProperty(object, property) {
  delete object[property];
  return object; 
}

function newUser(name, email, password) {
  let newUser = {
    name: name,
    email: email,
    password: password,
  };
  return newUser;
}

function hasEmail(user) {
  if (user['email'] === undefined || user['email'] === null) {
    return false;
  } else {
    return true;
  }
}

function hasProperty(object, property) {
  if (object[property] === undefined || object[property] === null) {
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
  user['friends'].push(newFriend);
  return user;
}

function setUsersToPremium(users) {
  for (var i = 0; i < users.length; i++) {
    users[i]['isPremium'] = true;
  }
  return users;
}



function sumUserPostLikes(user) {
  let sum = 0;
  let arr = user['posts'];
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i].likes;
  }
  return sum ;
  
}


function addCalculateDiscountPriceMethod(storeItem) {
  storeItem['calculateDiscountPrice'] = function() {
    let discount = this.price * this.discountPercentage;
    let discountedPrice = this.price - discount;
    return discountedPrice;
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
