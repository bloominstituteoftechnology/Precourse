// Do not change any of the function names

function makeCat(name, age) {
  let cat = {
    name : name,
    age : age,
    meow: function() {
      return 'Meow!';
    },
  };
  return cat;
}

/* create a new object with a name property with the value set to the name argument
add an age property to the object with the value set to the age argument
add a method called meow that returns the string 'Meow!'
return the object */


function addProperty(object, property) {
  object[property] = null;
  return object;
}
/*
user = {}
function addProperty(object, property) {
//   object.property = null;  // Doesn't work.
  object[property] = null;
  return object;
}

addProperty(user, 'someNewProperty')
console.log(user.someNewProperty);  // returns 'null'
console.log(user['someNewProperty']);  // returns 'null
*/


/* add the property to the object with a value of null
return the object
 note: the property name is NOT 'property'.  The name is the value of the argument called property (a string) */

function invokeMethod(object, method) {
  object[method]();
}
// method is a string that contains the name of a method on the object
// invoke this method
// nothing needs to be returned

function multiplyMysteryNumberByFive(mysteryNumberObject) {
    //mysteryNumber: mysteryNumber * 5;
    return mysteryNumberObject.mysteryNumber * 5;
}
// mysteryNumberObject has a property called mysteryNumber
// multiply the mysteryNumber property by 5 and return the product

function deleteProperty(object, property) {
  delete object[property];
  return object;
}
// remove the property from the object
// return the object

function newUser(name, email, password) {
    let user = {
        name: name,
        email: email,
        password: password,
      };
    return user;
}
// create a new object with properties matching the arguments passed in.
// return the new object

function hasEmail(user) {
    //return user.email !== null;
      //expect(user.email).toEqual(hasEmail)
        //expect(user.hasEmail({}).toEqual(true);
        //expect(user.hasEmail({}).toEqual(false);
        return !!user.email;
      }
      /*
     if (user.hasEmail === 0) {
      return false;
     } else if (user.hasEmail === ' ') {
       return false;
    } else {
      return true;
    }
} */
// return true if the user has a value for the property 'email'
// otherwise return false


function hasProperty(object, property) {
  return object.hasOwnProperty(property);
  // if (object.hasOwnProperty(property)) {
  //   return true;
  // } else {
  //   return false;
  // }

    //return !!object.property;
    //return !!hasProperty[property];
      /* if hasProperty(property) = ' '; {
      return false;
    }else {
      return true;
    }
} */
    //return !!hasProperty.property;
  }
// return true if the object has the value of the property argument
// property is a string
// otherwise return false

function verifyPassword(user, password) {
    return user.password === password;
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
    user.friends.push(newFriend);
    return user;
}
// user has a property called friends that is an array
// add newFriend to the end of the friends array
// return the user object


/*
// users is an array
users = []

// users is an array of user objects.
// - catch 1: "the objects aren't actualy called 'user' objects"
// - it should say "an array of objects"
users = [
  {},
  {},
  {},
]

// each user object has the property 'isPremium'
// - It doesn't say what the properties of each object are set to....
users = [
  {isPremium: null},  // users[0] example
  {isPremium: 'spaghetti'}, // users[1] example
  {isPremium: 1}, // users[2] example
]
*/

function setUsersToPremium(users) {
    for (let obj of users) {
      // set each user's isPremium property to true
      // set 'user' property isPremium to true
    obj.isPremium = true;
  }
    return users;
}
//for of or normal loop recommended for above problem

// users is an array of user objects.
// each user object has the property 'isPremium'
// set each user's isPremium property to true
// return the users array
/* user = {
  posts = [
    {likes: 7},
    {likes: 3},
    {likes: 2},
  ]
}
*/



function sumUserPostLikes(user) {
  //let likes = this.likes,
  /* let likes = 0;
    for (let post in user.posts) {  // post in this instance is  creating a variable called posts, which I can then utilize.
      return likes += post[likes];
    }*/
    let sum = 0;
    for(let i = 0; i < user.posts.length; i++){
      sum += user.posts[i].likes;
    }
    return sum;
}

    // total = 0  <-- How to do in Python.
    // for like in user.posts.likes:
    //     total += like
// user has an array property called 'posts'
// posts is an array of post objects
// each post object has an integer property called 'likes'
// sum together the likes from all the post objects
// return the sum

 function addCalculateDiscountPriceMethod(storeItem) {
    storeItem.calculateDiscountPrice = function() {
      //let storeItem.discount = this.price;
      return this.price - (this.price * this.discountPercentage);
      /*storeItem.price * storeItem.discountPrice;
      storeItem.discountedPrice = storeItem.price - storeItem.discount; */
    };
    return storeItem;
}
// add a method to the storeItem object called 'calculateDiscountPrice'
// this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
// the method then subtracts the discount from the price and returns the discounted price
// example:
// price -> 20
// discountPercentage -> .2
// discountPrice = 20 - (20 * .2)

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
