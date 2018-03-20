Objects are declared by use of the curly bracket {} and store values in key/value (sometimes referred to as property/value) pairs which are separaated by commas.  Objects can store any other kind of data, including functions!
    Example of an object that has nesting:
        const personalInfo = {
            name: 'Amy',
            occupation: 'student',
            pets: {
                one: {
                    name: 'Robert Lazarus',
                    type: 'cat',
                },
                two: {
                    name: 'Dylan Thomas',
                    type: 'cat',
                },
                behavior: function () {
                    console.log(this.one.name + ' often chases ' +  this.two.name + ' around the apartment.');
                }
            },
            spouse: 'Philip Welch'
        };

Properties are variables within objects.

Methods are functions that are attached to an object.  They are made when a property value is set to a function (as with behavior in the example above).

While for loops are used for arrays because each item in an array has a specific place in the array that can be referenced by using its placement number (index), items in an object do not have numbers to reference where they are located in the object.  for...in loops go over every property in an object one after another and carry out the instructions given to it after defining which properties in which object the code applies to.  As tempting as it may be to use for in loops for everything (as everything is an object), it is best to only use them with actual objects (rather than objects that are also arrays) because the order in which the instructions are carried out on properties can change the result.

The way you look up items in an object is different from looking up items in an array because items in an object don't have numbers to reference where they are in the object.  It's like while items in an array picked up a number when they got added to an array so that somoene could figure out where they were by their number, items in an object just got in line somewhere and hoped that someone caught what their name was.  Thankfully, items in an object come in pairs - they have a name (key) and then a value (what they equal if you were to call on them).  This makes it easier to find them because you can look them up by their key or their value. Dot notation is when you look up an item (property) in an object by using their name (objectname.keyname).  You can also look up an item using thier name in bracket notation, but because bracket notation requires the use of strings or numbers if you're not using a variable for reference, you need to type the name in quotation marks inside the bracket (objectname.['keyname']).  But putting someone's name in quotes can appear sarcastic, so it's kind of rude to use bracket notation if you know an item's name.  For this reason, dot notation is preferred if the name of the item is known and can be used.  If you want to look up an item using bracket notation and don't want to be rude, you can make a variable equal to a string with the object item's name in it and then use that instead - like giving an object item a cool nickname (objectName.[keyOfAwesome]).  This is also helpful if you need to reference an object item and all you have is an argument name and don't actually have the key name of the item you want to reference.  Dot notation can only look at items that are contained in an object in the order they are contained.  Bracket notation has no such rule (it can even look outside of the object for reference material).