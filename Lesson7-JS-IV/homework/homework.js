//Fenyman Writing Prompts
/*
Objects: A collection of related data and/or functionality. Instantiate it by declaring a variable followed by curly braces {}. Info/data can be added to an object using key: value pairs. Everything in JavScript is an object, which allows us to call methods on strings, arrays, elements in the DOM, etc.

Properties: Within an object, this is a data or key: value pair that is strictly a data item and NOT a function. It is specifically the value portion of the pair.

Methods: Within an object, this is a key: value pair that is a function. This function allows the object to do something with the data it receives, rather than simply storing it.

for in loop: We use this if we want to iterate over object elements. We cannot use a for loop as we would with an array because objects are not numerically indexed like arrays are. It knows to finish iterating once the end of the object key:value pairs are reached.

Dot notation vs. bracket notation: These are ways to access data, properties, and methods inside of arrays. Dot notation calls specific elements within an array by using the name of the object, followed by a dot, followed by the item to be accessed. Generally you will use dot notation unless you are accessing variables within an object, or using variables to access the object.. Then you would use bracket notation, which calls elements within an array by using the name of the object, followed by the item to be accessed in brackets.
*/



// Do not change any of the function names

function makeCat(name, age) {
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
  const cat = {
    name: name,
    age: age,
    meow: function() {
      return 'Meow!';
    }
  };
  return cat;
}

function addProperty(object, property) {
  // add the property to the object with a value of null
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)

  object[property] = null;
  return object;
}

function invokeMethod(object, method) {
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
  object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product

  //requires '' around the property because it is a known property; variables as properties do not require the quotes
  // return mysteryNumberObject['mysteryNumber'] * 5;
  return mysteryNumberObject.mysteryNumber * 5;
}

function deleteProperty(object, property) {
  // remove the property from the object
  // return the object
  delete object[property];
  return object;
}

function newUser(name, email, password) {
  // create a new object with properties matching the arguments passed in.
  // return the new object
  const newUser = {
    name: name,
    email: email,
    password: password
  };
  return newUser;
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  // otherwise return false
  if (user.email !== null && user.email !== undefined) {
    return true;
  } else {
    return false;
  }
}

function hasProperty(object, property) {
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
  if (property in object) {
    return true;
  } else {
    return false;
  }
}

function verifyPassword(user, password) {
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
  if (user.password === password) {
    return true;
  } else {
    return false;
  }
}

function updatePassword(user, newPassword) {
  // replace the existing password on the user object with the value of newPassword
  // return the object
  user.password = newPassword;
  return user;
}

function addFriend(user, newFriend) {
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
  user.friends.push(newFriend);
  return user;
}

function setUsersToPremium(users) {
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
  for (let key in users) {
    users[key]['isPremium'] = true;
  }
  return users;
}

function sumUserPostLikes(user) {
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum

  //user -> posts -> post objects -> likes

  // let totalLikes = 0;
  // for (let key in user) {
  //   totalLikes += user[key]['likes'];
  // }
  // return totalLikes;

  let totalLikes = 0;
  for (var i = 0; i < user.posts.length; i++) {
    totalLikes += user.posts[i].likes;
  }
  return totalLikes;
}

function addCalculateDiscountPriceMethod(storeItem) {
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // return storeItem at the end of the function
  // example:
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)

  storeItem.calculateDiscountPrice = function() {
    return this.discountPrice = this.price - (this.price * this.discountPercentage);
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
