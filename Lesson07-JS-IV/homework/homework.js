// Do not change any of the function names

function makeCat(name, age) {
  const cat = {
    // create a new object with a name property with the value set to the name argument
    // add an age property to the object with the value set to the age argument
    // add a method called meow that returns the string 'Meow!'
    // return the object
    name: name, 
    age:  age,
    meow: function(){
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
 
object[method]();
 // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned 
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  return mysteryNumberObject.mysteryNumber *5;
 } // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product



function deleteProperty(object, property) {
  delete object[property];
  return object; 
} // remove the property from the object
   // return the object




function newUser(name, email, password) {
  const user = {
    name: name,
    email: email,
    password: password,
  };
   {
     return user;
   }
  // create a new object with properties matching the arguments passed in.
  // return the new object
}

function hasEmail(user) {
  if (user.email){
    return true;
  }
  else return false;
 
  // return true if the user has a value for the property 'email'
  // otherwise return false
}

function hasProperty(object, property) {
  if (object.hasOwnProperty(property)){
    return true;
  }
   else return false;
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
}

function verifyPassword(user, password) {
  if (password === user.password){
    return true;
  }
  else return false;
   // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
}

function updatePassword(user, newPassword) {
  user.password = newPassword;
  return user;
  
  // replace the existing password on the user object with the value of newPassword
  // return the object
}

function addFriend(user, newFriend) {
  user.friends.push(newFriend);
  return user;
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
}

function setUsersToPremium(users) {
  
    for (let values in users) {
      users[values].isPremium = true;
    }
    return users;
  }// users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array


function sumUserPostLikes(user) {
  let sum = 0;
  user.posts.forEach(function(post) {
    sum +=post.likes;
   }); // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
 return sum; // return the sum
}


function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function() {
   return discountPrice = this.price - (this.price * this.discountPercentage);
  };
{// add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // return storeItem at the end of the function
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
 return storeItem;
}
storeItem[calculateDiscountPrice]();
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
