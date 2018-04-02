// Do not change any of the function names

function makeCat(name, age) {
  const newObject = {name:name, age:age, meow:function(){
    return 'Meow!';}
  };
  return newObject;
}

function addProperty(object, property) {
  object[property] = null;
  return object;
}

function invokeMethod(object, method) {
  object[method] ();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  return mysteryNumberObject.mysteryNumber*5;
}

function deleteProperty(object, property) {
  delete object[property];
  return object;
}

function newUser(name, email, password) {
  let user = {name:name, email:email, password:password};
  return user;
}

function hasEmail(user) {
  if(!(user.email)){return false;}
  else if(user.email == null){return false;}
  else{return true;}
}

function hasProperty(object, property) {
  if(!(object[property])){return false;}
  else if(object[property] == null){return false;}
  else{return true;}
}

function verifyPassword(user, password) {
  if(user.password === password){return true;}
  else{return false;}
}  
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false

function updatePassword(user, newPassword) {
  user.password = newPassword;
  return user;
}
  // replace the existing password on the user object with the value of newPassword
  // return the object

function addFriend(user, newFriend) {
  user['friends'].push(newFriend);
  return user;
}
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object

function setUsersToPremium(users) {
  for(let i = 0; i<users.length; i++){
    users[i]['isPremium'] = true;
  }
  return users;
}
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array

function sumUserPostLikes(user) {
  let sum = 0;
  for(let i=0; i<user['posts'].length; i++){
      sum = sum + user['posts'][i]['likes'];
  }
  return sum;
}
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum


function addCalculateDiscountPriceMethod(storeItem) {
  storeItem['calculateDiscountPrice'] = function(){
    return storeItem['price'] - storeItem['price']*storeItem['discountPercentage'];
  };
  return storeItem;
}
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // return storeItem at the end of the function
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)


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
