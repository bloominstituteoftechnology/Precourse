// Do not change any of the function names

function makeCat(name, age) {
+      name: name,// create a new object with a name property with the value set to the name argument
+	age: age,// add an age property to the object with the value set to the age argument
+     meow: function () {
+	return 'Meow!'; // add a method called meow that returns the string 'Meow!'
+	}
+  };
+  return catObject; // return the object
 }	 

function addProperty(object, property) {

+	object[property] = null;// add the property to the object with a value of null
+	return object;// return the object
 // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
}

function invokeMethod(object, method) {
+	object[method]();// method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
+	var product = mysteryNumberObject['mysteryNumber'] * 5;// mysteryNumberObject has a property called mysteryNumber
+    return product;// multiply the mysteryNumber property by 5 and return the product
}

function deleteProperty(object, property) {
	delete object[property];// remove the property from the object
	return object;// return the object
}

function newUser(name, email, password) {

	var user = {// create a new object with properties matching the arguments passed in.
		name: name,
		email: email,
		password: password
	};
	return user;// return the new object
}

function hasEmail(user) {
	if (user.email){

		return true; // return true if the user has a value for the property 'email'
	} else { return false;// otherwise return false
	}
}

function hasProperty(object, property) {
	if (object.hasOwnProperty(property)) {// return true if the object has the value of the property argument
		return true;// property is a string
	} else { return false; // otherwise return false
	}
}

 function verifyPassword(user, password) {
	if (user.password === password) {// check to see if the provided password matches the password property on the user object
		return true;// return true if they match
	} else {return false;// otherwise return false
	}
 }

function updatePassword(user, newPassword) {
	user.password = newPassword;// replace the existing password on the user object with the value of newPassword
	return user;// return the object
}

function addFriend(user, newFriend) {
	user.friends.push(newFriend);// user has a property called friends that is an array
	return user;// add newFriend to the end of the friends array
// return the user object
}

function setUsersToPremium(users) {
	for (var i = 0; i < users.length; i++){// users is an array of user objects.
		users[i].isPremium = true;// each user object has the property 'isPremium'
	}// set each user's isPremium property to true
	return users; 
}

function sumUserPostLikes(user) {
	var totalLikes = 0;// user has an array property called 'posts'
	for (var i in user.posts) {// posts is an array of post objects
		totalLikes += user.posts[i].likes;// each post object has an integer property called 'likes'
	}// sum together the likes from all the post objects
	return totalLikes;// return the sum
}

function addCalculateDiscountPriceMethod(storeItem) {
	storeItem.calculateDiscountPrice = function (){// add a method to the storeItem object called 'calculateDiscountPrice'
		var discountPrice = this.price - (this.price * this.discountPercentage);// this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
		return discountPrice;

	};// the method then subtracts the discount from the price and returns the discounted price
	return storeItem;
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
