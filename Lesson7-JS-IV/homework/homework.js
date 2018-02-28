// Do not change any of the function names

function makeCat(name, age) {
  const cat = {
    name,
    age,
    meow: function () {
      return ('Meow!');
    }
  }
}
  makeCat.meow;

function addProperty(object, property) {
  object.property = null;
      return (object + property);
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
  const passedIn = {
    name,
    email,
    password,
  }
}
  return newUser.passedIn;

function hasEmail(user) {
  const rightWrong = {
    email,
    exists: function () {
      if (user.email){
      return true;
      } 
      return false;
  }
}
  hasEmail.exists;
} 

function hasProperty(object, property) {
   if (object.hasOwnProperty(property)){
    return true;
   } 
    return false;
}

function verifyPassword(user, password) {
  if (password === user.password){
    return true;
  } 
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
  for (let i = 0; i < users.length; i++)
    users[i].premium = true;
      return users;
}

function sumUserPostLikes(user) {
  let Sumpostlikes = 0;
  user.posts.forEach (function(post){
  Sumpostlikes += post.likes;
    })
    return Sumpostlikes;
}

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function(){
    let discountPrice = this.price - (this.price * this.percent);
      return discountPrice;
    }
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
