function makeCat(name, age) {
	// create a new object with a name property with the value set to the name argument
	// add an age property to the object with the value set to the age argument
	// add a method called meow that returns the string 'Meow!'
	// return the object
	const cat = {
		name: name,
		age: age,
		meow: function() {return 'Meow!';},
	};
	return cat;
}

function addProperty(object, property) {
	// add the property to the object with a value of null
	// return the object
	// note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
	let newObject = object;
	newObject[property] = null;
	return newObject;
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
	let num = mysteryNumberObject.mysteryNumber;
	num = num*5;
	return num;
}

function deleteProperty(object, property) {
	// remove the property from the object
	// return the object
	let newObject = object;
	newObject[property] = undefined;
	return newObject;
}

function newUser(name, email, password) {
  // create a new object with properties matching the arguments passed in.
  // return the new object
  const thisObject = {name: name, email: email, password: password,};
  return thisObject;
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  // otherwise return false
  if (user.email == null || user.email == undefined || user.email == '') {return false;}
  else {return true;}
}

function hasProperty(object, property) {
	// return true if the object has the value of the property argument
	// property is a string
	// otherwise return false
	const key = property;
	if(object[key] == undefined || object[key] == null){return false;}
	else {return true;}

}

function verifyPassword(user, password) {
	// check to see if the provided password matches the password property on the user object
	// return true if they match
	// otherwise return false
	if(user.password == password) {return true;}
	else {return false;}
}

function updatePassword(user, newPassword) {
	// replace the existing password on the user object with the value of newPassword
	// return the object
	let newUser = user;
	newUser.password = newPassword;
	return newUser;
}

function addFriend(user, newFriend) {
	// user has a property called friends that is an array
	// add newFriend to the end of the friends array
	// return the user object
	let newUser = user;
	newUser.friends.push(newFriend);
	return newUser;
}

function setUsersToPremium(users) {
	// users is an array of user objects.
	// each user object has the property 'isPremium'
	// set each user's isPremium property to true
	// return the users array
	let newUsers = users;
	for(let i=users.length-1; i>=0; i--)
	{
		newUsers[i].isPremium = true;
	}
	return newUsers;
}

function sumUserPostLikes(user) {
	// user has an array property called 'posts'
	// posts is an array of post objects
	// each post object has an integer property called 'likes'
	// sum together the likes from all the post objects
	// return the sum
	let numLikes = 0;
	const numPasses = user.posts.length;
	for(let i=numPasses-1; i>=0; i--)
	{
		numLikes = numLikes + user.posts[i].likes;
	}
	return numLikes;
}

function addCalculateDiscountPriceMethod(storeItem) {
	// add a method to the storeItem object called 'calculateDiscountPrice'
	// this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
	// the method then subtracts the discount from the price and returns the discounted price
	// example: 
	// price -> 20
	// discountPercentage -> .2
	// discountPrice = 20 - (20 * .2)
	let discount = null;
	let updatedPrice = null;
	const newPrice = storeItem.price;
	const newDiscount = storeItem.discountPercentage;
	
	const newStoreItem = {
		price: newPrice,
		discount: newDiscount,
		calculateDiscountPrice: function()
		{
			discount = newPrice*newDiscount;
			updatedPrice = newPrice - discount;
			return updatedPrice;
		},
	};
	return newStoreItem;
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
