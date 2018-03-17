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
Methods are functions that are attached to an object.  They are made when a property value is set to a functio (as with behavior in the example above).

for in loops are a way to iterate over properties in an object.  As tempting as it may be to use for in loopsf or everything (as everything is an object), it is best to only use them with actual objects.

Dot notation is when you access information in an object by typing objectname.keyname (like personalInfo.pets).  Information can also be accessed using bracket notation.  For bracket notation, you have to use a string or number (or variable pointing to a string or number).  For example, if we wanted to call occupation in personalInfo, we would type personalInfo['occupation'.]  If we wanted to use a variable to call it, we would create a variable (example - const workplace = 'occupation') and then access the value of occupation by typing personalInfo[workplace].
