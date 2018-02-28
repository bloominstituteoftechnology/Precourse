// Do not change any of the function names

function makeCat(name, age) {
  const cat = {};
  cat.name = name;
  cat.age = age;
  cat.meow = function (){
     return 'Meow!';
  };
  return cat;
}

function addProperty(object, property) {
  object[property] = null;
  return oject;
}

function invokeMethod(object, method) {
  object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
 var product = mysteryNumberObject.mysteryNumber * 5;
 return product;
}

function deleteProperty(object, property) {
  delete object[property];
  return object;
}

function newUser(name, email, password) {
  var user = {};
    user.name = name;
    user.email = email;
    user.password = password;
    return user;
}

function hasEmail(user) {
  if (user.email){
    return true;
  } else {
    return false;
  }
}

function hasProperty(object, property) {
  if (object[property]){
    return true;
  } else {
    return false;
  }
}

function verifyPassword(user, password) {
  if (user['password'] === password){
    return true;
  } else {
  return false;
  }
}

function updatePassword(user, newPassword) {
  user['password'] = newPassword;
  return user;
}

function addFriend(user, newFriend) {
  user.friends.push(newFriend);
  return user;
}

function setUsersToPremium(users) {
  for (var i = 0; i < users.length; i++){
    users[i].isPremium = true;
  }
  return users;
}

function sumUserPostLikes(user) {
  var sum = 0;
  for (var i = 0; i < user.posts.length; i++){
    sum += user.posts[i].likes;
  }
  return sum;
}

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function(){
    storeItem.discountPrice = storeItem.price - (storeItem.price * storeItem.discountPercentage);
    return storeItem.discountPrice;
  };
  return storeItem
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
