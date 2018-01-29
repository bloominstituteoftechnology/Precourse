/* Feynman Writing HW:

    *Objects: 
      An object is a potentially large holder of data (when compared to single variables or anything of that sort). 
    In practice, though objects ARE variables, just larger versions of them, which contain more variables, 
    specifically properties and the values contained within those properties generally. Objects can also contain functions, 
    in which case they're called methods, and they can contain arrays and other objects (and I assume nearly anything that you might slip in there, given that it doesn't cause some error).

    *Properties: 
      Properties are the primary sub-variables of objects. They seem to be the most basic of the options for storing information and values within objects.

    *Methods: 
      Methods are simply functions within an object. In terms of syntax, you call upon that object's function (i.e. user.sendEmail()), 
    which is called its method, to use it. 

    *for in loop: 
      A for in loop is a way of targeting all of the variables in an object, 
    specifically in a potentially arbitrary order (see the second paragraph of the description: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in),
    and 'loops' through them. It can be used to go through all of the 'keys'/items in an object.
    I think it can be used for other things as well, but I'm not sure how useful it'd be in other cases.

    *Dot notation vs bracket notation: 
      Dots are used for using the value of a property while brackets are used for using the property itself. 
    Typically, we want what's in the property, not so much the property itself.

*/


// Do not change any of the function names


function makeCat(name, age) {
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
  let catDetails = {
    name: name,
    age: age,
    meow: function() {
      return 'Meow!';
    },
  };
  return catDetails;
}


  // add the property to the object with a value of null
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)

function addProperty(object, property) {
  object[property] = null;
  return object;
}


  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned

function invokeMethod(object, method) {
  object[method]();
}


  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  let fiveTimes = mysteryNumberObject.mysteryNumber * 5;
  return fiveTimes;
}


  // remove the property from the object
  // return the object

function deleteProperty(object, property) {
  delete object[property];
  return object;
}


  // create a new object with properties matching the arguments passed in.
  // return the new object

function newUser(name, email, password) {
  let newObj = {
    name,
    email,
    password,
  };
  return newObj;
}


  // return true if the user has a value for the property 'email'
  // otherwise return false

function hasEmail(user) {
  if (user.email !== undefined && user.email !== '' ) {
    return true;
  } else {
    return false;
  }
}


  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false

function hasProperty(object, property) {
  if (object[property] !== undefined) {
    return true;
  } else {
    return false;
  }
}


  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false

function verifyPassword(user, password) {
  if (password === user.password) {
    return true;
  } else {
    return false;
  }
}


  // replace the existing password on the user object with the value of newPassword
  // return the object

function updatePassword(user, newPassword) {
  user.password = newPassword;
  return user;
}


  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object

function addFriend(user, newFriend) {
  user.friends.push(newFriend);
  return user;
}


  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array

function setUsersToPremium(users) {
  for (let user of users) {
    user.isPremium = true;
  }
  return users;
}


  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum

function sumUserPostLikes(user) {
  let sum = 0;
    for (let i = 0; i < user.posts.length; i++) {
      sum += user.posts[i].likes;
    }
  return sum;
}


  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function(price, discountPercentage) {
    let discount = storeItem.price * storeItem.discountPercentage;
    let newPrice = storeItem.price - discount;
    return newPrice;
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
