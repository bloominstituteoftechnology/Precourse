// Do not change any of the function names




function makeCat(name, age) {
  let myCat = { // create a new object 
    name: name, //with a name property with the value set to the name argument
    age: age, // add an age property to the object with the value set to the age argument
    meow: function meow() { // add a method called meow that returns the string 'Meow!'
      return 'Meow!';
    },
  };
  // return the object
  return myCat;
}

function addProperty(object, property) {
  object[property] = null; // add the property to the object with a value of null
  return object; // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
}

function invokeMethod(object, method) {
  // method is a string that contains the name of a method on the object
  object[method](); // invoke this method
  // nothing needs to be returned
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
  var product = mysteryNumberObject.mysteryNumber * 5;
  return product;
}

function deleteProperty(object, property) {
  delete object[property]; // remove the property from the object
  return object; // return the object
}

function newUser(name, email, password) {
  let employee = { // create a new object with properties matching the arguments passed in.
    name: name,
    email: email,
    password: password,
  };
  return employee; // return the new object
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  if (user.email) {
    return true;
  } else {
    return false;
  }
}

function hasProperty(object, property) {
  // property is a string
  if (object.hasOwnProperty(property)) { // return true if the object has the value of the property argument
    return true;
  } else { // otherwise return false
    return false;
  }
}

function verifyPassword(user, password) {
  if (user.password === password) { // check to see if the provided password matches the password property on the user object
    return true; // return true if they match
  } else {
    return false; // otherwise return false
  }
}

function updatePassword(user, newPassword) {
  user.password = newPassword; // replace the existing password on the user object with the value of newPassword
  return user; // return the object
}

function addFriend(user, newFriend) { // user has a property called friends that is an array  
  user.friends.push(newFriend); // add newFriend to the end of the friends array
  return user; // return the user object
}

function setUsersToPremium(users) { // users is an array of user objects.
  // each user object has the property 'isPremium',
  for (var i = 0; i < users.length; i++) { //..so do a iterative search  over the array
    users[i].isPremium = true; // set each user's isPremium property to true
  }
  return users; // return the users array
}

  function sumUserPostLikes(user) { // user has an array property called 'posts',and posts is an array of post objects
    var totalLikes = 0;
    for (var i in user.posts) { // each post object has an integer property called 'likes'
      totalLikes += user.posts[i].likes; // sum together the likes from all the post objects
    }
    return totalLikes; // return the sum
  }

  function addCalculateDiscountPriceMethod(storeItem) {
    // add a method to the storeItem object called 'calculateDiscountPrice'
    storeItem.calculateDiscountPrice = function () {
      // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
      // the method then subtracts the discount from the price and returns the discounted price
      let discountPrice =this. price - (this.price * this.discountPercentage);
      return discountPrice;
    };
    return storeItem; // return storeItem at the end of the function
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