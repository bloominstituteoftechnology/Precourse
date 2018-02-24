// Do not change any of the function names

function makeCat(name, age) {
  const cat = {
    name: name,
    age: age,
    meow: function()
    { return 'Meow!';}
  };return cat;
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
  const newus = {
    name: name,
    email: email,
    password: password,
  };return newus;
}

function hasEmail(user) {
  if (user.email) return true;
  return false;
}

function hasProperty(object, property) {
  if (object[property]) return true;
  return false;
}

function verifyPassword(user, password) {
  if (user.password === password) return true;
  return false;
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
  for (let i = 0; i < users.length; i++){
    users[i].isPremium = true;
      }
  return users;
}

function sumUserPostLikes(user) {
  let sum = 0;
  for (let i = 0;i < user.posts.length; i++){
  let obj = user.posts[i];
  sum += obj.likes;
}
return sum;
}

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function() {
    let discount =this.price - (this.price * this.discountPercentage);
    return discount;
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
