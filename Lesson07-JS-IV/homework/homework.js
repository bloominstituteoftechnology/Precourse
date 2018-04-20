// Do not change any of the function names

function makeCat(name, age) {
  var cat = {};
  cat.name = name;
  cat.age = age;
  cat.meow = function (){
    return 'Meow!';
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
  return mysteryNumberObject.mysteryNumber*5;
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
  } else return false;
}

function hasProperty(object, property) {
  if (object.hasOwnProperty(property)){
   return true;
  } else return false;
}

function verifyPassword(user, password) {
  if (password === user.password){
    return true;
  } else return false;
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
  for (var i = 0; i < users.length; i++)
    users[i].isPremium = true;
  return users;
}

function sumUserPostLikes(user) {
  var postLikeSum = 0;
  user.posts.forEach(function(post){
  postLikeSum += post.likes;
});
return postLikeSum;

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function(){
    var discountPrice = this.price - (this.price * this.discountPercentage);
      return discountPrice;
  };
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