// Do not change any of the function names

function makeCat(name, age) {
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
  return {
    name : name,
    age : age,
    meow : function() {
      return 'Meow!';
    }
  // Weird how it knows the first instance of name is a property of the object
  // ... while the second instance is a parameter of the function
  // Same for the instances of age
  // Very confusing!!!
  };
}

function addProperty(object, property) {
  // add the property to the object with a value of null
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
  object[property] = null;
  // I guess this adds the property if it does not already exist
  return object;
}

function invokeMethod(object, method) {
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
  object[method]();
  // Have to use bracket notation to get the methodname out of the method parameter
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
  return 5 * mysteryNumberObject.mysteryNumber;
  // Can use dot notation as we are given the property name
}

function deleteProperty(object, property) {
  // remove the property from the object
  // return the object
  delete object[property];
  return object;
  // Have to use bracket notation to get the propertyname out of the property parameter
}

function newUser(name, email, password) {
  // create a new object with properties matching the arguments passed in.
  // return the new object
  return {
    name : name,
    email : email,
    password : password,
  };
  // Seems similarly disconcerting to the makeCat task above
  /* Hovering with the cursor (in VS Code editor in Windows): 
     before each colon shows '(property) name : any'
     after each colon shows '(parameter) name : any' 
     and the same for hovering over 'email' and 'password' */
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  // otherwise return false
  return !!user.email;
  // 0, null, undefined, false, NaN, '' (empty string) are all cast to false by !!
  // anything else will be cast to true by the !! operator before being returned
}

function hasProperty(object, property) {
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
  return !!object[property];
  // 0, null, undefined, false, NaN, '' (empty string) evaluate to false
  // anything else will be cast to true by the !! operator before being returned
}

function verifyPassword(user, password) {
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
  return user.password === password;
  // Compare the value of the password property of user with the value of the password parameter!
  /* Hovering over each instance of 'password' with the cursor (in VS Code in Windows):
     shows 'any' for the first one and '(parameter) password : any' for the second one */
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
  users.forEach(function(user) {
  // for each object in the users array in turn
  // it is given the parameter name 'user'
  // so we can access its isPremium property
    user.isPremium = true;
  });
  return users;
}

function sumUserPostLikes(user) {
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum


  /* Version (1) This works:

  let finalPostObject = user.posts.reduce(function(previousPostObject, nextPostObject) {
    nextPostObject.likes += previousPostObject.likes;
    return nextPostObject;
  });
  return finalPostObject.likes; */

  // The array of post objects has been reduced to just one, which is the final one in the array
  // Note that its likes property has been updated with a running total of likes from previous posts
  
  
  // Do I need the intermediate variable to hold the final object?
  // .reduce does not have to return a result of the same type as the array elements
  // See example in Mozilla documentation

  /* Version (2) I couldn't get this to work, returns NaN:
  return user.posts.reduce(function(previousPostObject, nextPostObject) {
    return previousPostObject.likes + nextPostObject.likes;
  }); */

  // You can chain .map before .reduce (wow!) 
  // Makes an array of likes values from the array of objects before summation
  // Uses arrow notation for the functions
  // Much easier to read - yay!
  // Version (3) Adapted from an example in MDN:
  return user.posts.map(postObject => postObject.likes)
                   .reduce((acc, likes) => acc + likes); 


  // We can set an initial value, but it must be of the same type as the function parameters
  // To do this we have to add another return (why?) and semi-colon and some curly brackets - ugly!
  // The initial value avoids an error if the array is empty

  /* Version (4) Not as neat, but more robust:
  return user.posts.map(postObject => postObject.likes)
                   .reduce((acc, likes) => {return acc + likes;}, 0); */
} 

function addCalculateDiscountPriceMethod(storeItem) {
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
  storeItem.calculateDiscountPrice = function() {
    return this.price * (1 - this.discountPercentage);
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