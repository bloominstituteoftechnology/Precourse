// Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.

// 	* Objects - Everything in Javascript is an object. However, the things that are explicitly only objects and nothing else are things that allow us to define what they are. You can do this through setting different properties (and their values) as well as making methods for these objects.

// 	* Properties - Objects possess properties that contain specific values to those properties. Think of a property as a key that contains a value (sometimes that value can be empty, but that will still mean that property exists on the object).

// 	* Methods - Methods are built-in functions. These are things that you can execute; they are more than just properties because they can be utilized (whereas a property won't inherently 'do' something; it can be read, and it will remain stored, but it wouldn't perform an action the way a method will).

// 	* for in loop - a loop that is best used on objects; whereas a for loop will primarily work well for indexed values, a for in loop will work well for objects due to their non-indexed nature; think of it as being a way to run a loop for an un-ordered list

// 	* Dot notation vs bracket notation - dot notation and bracket notation both are useful for calling on different properties that exist within an object; however, they both work differently— dot notation requires you to explicitly know and write the exact property name; bracket notation will be more useful when you're looking up a variable instead of the literal name of the property. Bracket notation, when looking up based off of the literal name of the property, will require the name to be a string within '', whereas dot notation is written without the quotes.

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
  const user = {
    name: name,
    email: email,
    password: password
  };
  return user;
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  // otherwise return false
  if (user.email) {
    return true;
  }
  return false;
}

function hasProperty(object, property) {
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
  if (object[property]) {
    return true;
  }
  return false;
}

function verifyPassword(user, password) {
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
  if (password === user.password) {
    return true;
  }
  return false;
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
  return users.map(user => Object.assign({}, user, { isPremium: true }));
}

function sumUserPostLikes(user) {
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum

  //let sum = 0;
  // for (let i = 0; i < user.posts.length; i++) {
  //   sum = sum + user.posts[i].likes;
  // }

  return user.posts.reduce((counter, post) => counter + post.likes, 0);
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
    const discountPrice =
      storeItem.price - storeItem.price * storeItem.discountPercentage;
    return discountPrice;
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
  addCalculateDiscountPriceMethod
};
