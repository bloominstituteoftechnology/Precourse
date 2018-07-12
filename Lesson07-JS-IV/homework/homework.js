// Do not change any of the function names

function makeCat(name, age) {
  const info {
    currentName = name;
    currentAge = age;
    meow: function(){
      return 'Meow!';
    }
  }
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
}

function addProperty(object, property) {
      this.property = null;
        return addProperty.object;
    }
  }
  // add the property to the object with a value of null
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
}

function invokeMethod(object, method) {
  const newMethod {
    invoke: function(){

    }
  }
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  const number {
    MysteryNumber = mysteryNumberObject;
    multiply: function(){
      return number.MysteryNumber * 5;
    }
  }

  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
}

function deleteProperty(object, property) {
  const deleteProperty {
    object = deleteProperty.object,
    property = deleteProperty.property,
    delete: function(){
      deleteProperty.propertry = null;
      return deleteProperty.object;
    }
  }
  // remove the property from the object
  // return the object
}



function newUser(name, email, password) {
  const Noobie {
    name = name,
    email = email,
    password = password,
    newUser: function(){
      return Noobie;
  }
  // create a new object with properties matching the arguments passed in.
  // return the new object
}

function hasEmail(user) {
  for (let key in Noobie) {
    if email /= null;
    console.log('email:', Noobie.email);
  }
  // return true if the user has a value for the property 'email'
  // otherwise return false
}

function hasProperty(object, property) {
  const object {
    object = object,
    property = property,
    check: function(){
      if object = this.property {
        console.log("true");
      }
      else{
        console.log("false");
      }
    }
  }
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
}

function verifyPassword(user, password) {
  const User {
    name: = Daniel,
    PW: = ASDFASD
    check: function(){
      var pass = verifyPassword.password
      if pass == User.PW {
        return true;
      }
      else {
        return false;
      }
    }
  }
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
}

function updatePassword(user, newPassword) {
  const user {
    name: = Daniel 
    PW: = asdfasdf
  }
  // replace the existing password on the user object with the value of newPassword
  // return the object
user.PW = updatePassword.newPassword;    }
}

function addFriend(user, newFriend) {
  const array = ['1','2','3']
  const user {
    friends: = array
  }

  array.push(newFriend);
  return user;
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
}

function setUsersToPremium(users) {
  const array []
  const user1 {
    status: = false;
  }
  const user2 {
    status: = false;
  }
  update: function(){
    user1.status = true;
    user2.status = true;
  }
  array.push(user1);
  array.push(user2);
  return array;
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
}

function sumUserPostLikes(user) {
  const post = [];
  const user {
    written: = post,
    post: = post{
      likes: = 10
    }
  }
  return user.post.likes; 
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
}

function addCalculateDiscountPriceMethod(storeItem) {
  const item{
    price: = storeItem,
    percentage: = 0.2
    discount: function(){
      total = price - (storeItem * 0.2)
      return total;
    }
  }
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // return storeItem at the end of the function
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
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
