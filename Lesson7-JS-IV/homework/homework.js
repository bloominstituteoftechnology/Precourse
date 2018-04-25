// Do not change any of the function names
 
function makeCat() {
  const newCat = {
   name:'Snowball III',
   age:2,
   meow: function(){
    newCat.meow = 'Meow!';
   }
  }; return newCat;   
} 
     makeCat(); 
      // create a new object with a name property with the value set to the name argument
    // add an age property to the object with the value set to the age argument
   // add a method called meow that returns the string 'Meow!'
  // return the object 
  
  
  function addProperty() {
    const updatedObject = {
     x: 1,
     y: 2,
    };
      updatedObject.z = null;
      return updatedObject;
}
  addProperty();
     // add the property to the object with a value of null
    // return the object
   // note: the property name is NOT 'property'.
  //The name is the value of the argument called property (a string)


  function invokeMethod(){
    const object = {
      x: 0,
      incrementX: function() {
       object.x = 0;
       x++;
       }
    };
     invokeMethod();
  }   
      //expect(object.x).toBe(1);
     // method is a string that contains the name of a method on the object
   // invoke this method
  // nothing needs to be returned



function multiplyMysteryNumberByFive(){
    const mysteryNumberBox = {
     mysteryNumber: -5,
     };
   num = mysteryNumberBox.mysteryNumber * 5;
   return num;
 }
     multiplyMysteryNumberByFive();
  // mysteryNumberObject has a property called mysteryNumber
 // multiply the mysteryNumber property by 5 and return the product



function deleteProperty(){
  const updateObject = {
   x: 1,
   y: 2,
   z: null,
  };
 delete updateObject.z;
 return updateObject;
}
deleteProperty();



function newUser() {
  const user = {
   name: 'Ben',
   email: 'ben@lambdaschool.com',
   password: 'correcthorsebatterystaple',
  };
  user.name = 'Austen';
  user.email = 'austen@lambdaschool.com';
  user.password = 'password';
   return user;
}
    newUser();
  // create a new object with properties matching the arguments passed in
 // return the new object
//'Austen', 'austen@lambdaschool.com', 'password'



function hasEmail() {
  const thisUser = {
    username: 'SunJieMing',
    email: 'ben@lambdaschool.com',
  };
 if (thisUser.email){
   return true;
 } else {
   return false;
  }
}
 hasEmail();
// return true if the user has a value for the property 'email'
// otherwise return false



function hasProperty() {
   const obj = {
    x: true,
   };
 const prop = obj.x;
  if (prop) {
    return true;
  } else 
    return false;
  }
    hasProperty();
 //return true if the object has the value of the property argument
//property is a string
// otherwise return false



function verifyPassword() {
  const thatUser = {
   password: 'I love js!',
  };
 if(thatUser.password==='I love js!') {
   return true;
 } else { 
   return false;
   }
}
   verifyPassword();
  // check to see if the provided password matches the password property on the 
 //user object, return true if they match
//otherwise return false



function updatePassword() {
  const isUser = {
    password: 'I love js!',
  };
 isUser.password = 'I love js even more!';
  return isUser;
}
  updatePassword();
 // replace the existing password on the user object with the value of newPassword
// return the object



function addFriend() {
  const amUser = { 
    friends: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'], 
   };
 newFriend = amUser.friends;
 newFriend.push('Shay');
   return amUser.friends;
}
   addFriend();
  // user has a property called friends that is an array
 // add newFriend to the end of the friends array
// return the user object



function setUsersToPremium() {
  const users = [
   { isPremium: false }, 
   { isPremium: false }, 
   { isPremium: false }, 
   { isPremium: false }, 
   { isPremium: false }, 
  ];
 users[0] = {isPremium: true};
 users[1] = {isPremium: true};
 users[2] = {isPremium: true};
 users[3] = {isPremium: true};
 users[4] = {isPremium: true};
   return users;
}
  setUsersToPremium();



  function sumUserPostLikes() {
    const user = {
      username: 'SunJieMing',
      password: 'JavaScript is awesome!',
      posts: [
      {
        id: '1',
        title: 'JS adventures!',
        likes: 10
      },
      {
        id: '2',
        title: 'LambdaSchool forever!',
        likes: 100
      },
      {
        id: '3',
        title: 'What is a JavaScript?',
        likes: 35
      },
      {
        id: '4',
        title: 'JS Objects for dummies',
        likes: 42
      },
      {
        id: '5',
        title: 'Online Education',
        likes: 99
      },  
      ],
    };
   let userP = user.posts;
   let postP = userP[0];
   let postP1 = userP[1];
   let postP2 = userP[2];
   let postP3 = userP[3];
   let postP4 = userP[4];
   let pTotal = 
     postP.likes+postP1.likes+postP2.likes+postP3.likes+postP4.likes;
    return pTotal;
} 
  sumUserPostLikes();
    // user has an array property called 'posts'
   // posts is an array of post objects
  // each post object has an integer property called 'likes'
 //  sum together the likes from all the post objects
// return the sum



  
function addCalculateDiscountPrice(){
  const storeItem = {
    price: 80,
    discountPercentage: 0.1,
    calculateDiscountPrice: function(){
     discountPrice = storeItem.price - (storeItem.price * storeItem.discountPercentage);
    }
  };   
 x = storeItem.price;
 y = storeItem.discountPercentage;
 z = x - (x * y);
  return storeItem;
}
addCalculateDiscountPrice();
       // add a method to the storeItem object called 'calculateDiscountPrice'
      // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
     // the method then subtracts the discount from the price and returns the    discounted price
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