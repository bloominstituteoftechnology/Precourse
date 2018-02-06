var exercises = require('../homework');

describe('makeCat(name, age)', function() {
  it('should create a new cat with the name and age properties set', function() {
    expect(exercises.makeCat('Snowball', 1).name).toBe('Snowball');
    expect(exercises.makeCat('Snowball', 1).age).toBe(1);
    expect(exercises.makeCat('Snowball II', 5).name).toBe('Snowball II');
    expect(exercises.makeCat('Snowball II', 5).age).toBe(5);
  });
  it('should add a method called meow to the new cat object', function() {
    expect(exercises.makeCat('Snowball III', 2).meow()).toBe('Meow!');
  });
});

describe('addProperty(object, property)', function() {
  it('should add the property to the object with a value of null', function() {
    var object = {
      x: 1,
      y: 2
    };
    var updatedObject = {
      x: 1,
      y: 2,
      z: null
    };
    expect(exercises.addProperty(object, 'z')).toEqual(updatedObject);
  });
});

describe('invokeMethod(object, method)', function() {
  it('should invoke the method on the object', function() {
    var object = {
      x: 0,
      incrementX: function() {
        this.x++;
      }
    }
    exercises.invokeMethod(object, 'incrementX');
    expect(object.x).toBe(1);
  });
});

describe('multiplyMysteryNumberByFive(mysteryNumberObject)', function() {
  it('should return the mysteryNumber property multiplied by five', function() {
    var mysteryBox = {
      mysteryNumber: 999
    };
    expect(exercises.multiplyMysteryNumberByFive(mysteryBox)).toBe(4995);
    mysteryBox.mysteryNumber = -5
    expect(exercises.multiplyMysteryNumberByFive(mysteryBox)).toBe(-25);
  });
});

describe('deleteProperty(object, property)', function() {
  it('should delete the property from the object', function() {
    var updatedObject = {
      x: 1,
      y: 2
    };
    var object = {
      x: 1,
      y: 2,
      z: null
    };
    expect(exercises.deleteProperty(object, 'z')).toEqual(updatedObject);
  });
});

describe('newUser(name, email, password)', function() {
  it('should return a new user object with a name, email, and password property that match the arguments', function() {
    var user = {
      name: 'Ben',
      email: 'ben@lambdaschool.com',
      password: 'correcthorsebatterystaple'
    };
    expect(exercises.newUser(user.name, user.email, user.password)).toEqual(user);
    var user = {
      name: 'Austen',
      email: 'austen@lambdaschool.com',
      password: 'password'
    };
    expect(exercises.newUser(user.name, user.email, user.password)).toEqual(user);
  });
});

describe('hasEmail(user)', function() {
  it('should return true if the user object has a value for its email property', function() {
    expect(exercises.hasEmail({ username: 'SunJieMing', email: 'ben@lambdaschool.com' })).toEqual(true);
    expect(exercises.hasEmail({ username: 'Austen', email: '' })).toEqual(false);
    expect(exercises.hasEmail({ username: 'Ryan' })).toEqual(false);
  });
});

describe('hasProperty(object, property)', function() {
  it('should return true if the object has the property that is passed in', function() {
    var obj = {
      x: true
    };
    expect(exercises.hasProperty(obj, 'x')).toEqual(true);
    expect(exercises.hasProperty(obj, 'y')).toEqual(false);
  });
});

describe('verifyPassword(user, password)', function() {
  it('should return true if passwords match', function() {
    var user = {
      password: 'I love js!'
    };
    var password = 'I love js!';
    expect(exercises.verifyPassword(user, password)).toBe(true);
  });
  it('should return false if passwords do not match', function() {
    var user = {
      password: 'I love js!'
    };
    var password = 'Hack this guy!';
    expect(exercises.verifyPassword(user, password)).toBe(false);
  });
});

describe('updatePassword(user, password)', function() {
  it('should return the user object with the updated password', function() {
    var user = {
      password: 'I love js!'
    };
    var password = 'I love js even more!';
    expect(exercises.updatePassword(user, password).password).toBe(password);
  });
});

describe('addFriend(user, newFriend)', function() {
  it('should add a new friend to the end of the friends array property', function() {
    var user = {
      friends: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young']
    };
    var newFriend = 'Shay';
    expect(exercises.addFriend(user, 'Shay').friends.pop()).toBe('Shay');
  });
});

describe('setUsersToPremium(users)', function() {
  it('should return the users array with each user\'s isPremium property set to true', function() {
    var users = [
      { isPremium: false }, 
      { isPremium: false }, 
      { isPremium: false }, 
      { isPremium: false }, 
      { isPremium: false }, 
    ];
    var updatedUsers = [
      { isPremium: true }, 
      { isPremium: true }, 
      { isPremium: true }, 
      { isPremium: true }, 
      { isPremium: true }, 
    ];
    expect(exercises.setUsersToPremium(users)).toEqual(updatedUsers);
  });
});

describe('sumUserPostLikes(user)', function() {
  it('should return the sum of likes for all user posts', function() {
    var user = {
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
        }
      ]
    };
    expect(exercises.sumUserPostLikes(user)).toBe(286);
  });
});

describe('addCalculateDiscountPriceMethod(storeItem)', function() {
  var storeItem = {
    price: 80,
    discountPercentage: 0.1
  };
  var storeItem2 = {
    price: 5,
    discountPercentage: 0.5
  };

  it('should add the method \'calculateDiscountPrice\' to the store item object', function() {
    expect(exercises.addCalculateDiscountPriceMethod(storeItem).calculateDiscountPrice).toBeDefined();
    expect(exercises.addCalculateDiscountPriceMethod(storeItem2).calculateDiscountPrice).toBeDefined();
  });
  it('should return the discount price from the new \'calculateDiscountPrice\' method', function() {
    expect(exercises.addCalculateDiscountPriceMethod(storeItem).calculateDiscountPrice()).toBe(72);
    expect(exercises.addCalculateDiscountPriceMethod(storeItem2).calculateDiscountPrice()).toBe(2.5);
  });
});
