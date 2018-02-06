# Lesson 12: DOM
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Introduction to the `DOM`
* The `script` Element
* `document`
* `document` Selectors
* Element Methods
* Event Handlers

## Introduction to the `DOM`

The `DOM` (as you will repeatedly hear it called) refers to 'Document Object Model'. When a browser loads a webpage, it takes all of the HTML and creates a model from it. Using Javascript we can access and manipulate that model. Adding and removing elements, changing attributes of elements, and changing styling of elements. 

## The `script` Element

We can inject our Javascript code into an HTML page by using the `script` element. We can do this two ways. 

First is to insert opening and closing script tags in the `head` element, the same way we would use the `title` or `style` elements. We then insert our Javascript code directly on the HTML page inline.

```html
    <html>
        <head>
            <script>
                // Here is our javascript code.
                alert('In our Javascript code');
            </script>
        </head>
    </html>
```

The second way is to use the script tag to retrieve our external Javascript file and inject that into our HTML page. Note, the attributes (flags) we use in script are `type` which should be set to "text/javascript" and `src` which will be set to the location of your file. We also want to include the keyword `async` and the end of our script tag to tell the browser to load the script asynchronously from the HTML. NOTE: script is not a self closing tag, you must include a closing tag.

```html
    <html>
        <head>
            <script type="text/javascript" src="./index.js" async></script>
        </head>
    </html>
```

## `document`

The first thing to note about Javascript running on a webpage is it's access to a global object called `document`. Remember that DOM stands for `Document Object Model`, the `document` object contains our DOM and prototype methods that allow us to access elements on the DOM and manipulate them. 

## `document` Selectors

`document` contains dozens of methods on it's prototype. But most useful are it's selectors.  We will take a look at the five most common.

### `document.getElementsByClassName`

`getElementsByClassName` will find elements based on their class names. It will return an array-like object that we can use to iterate through. The class name supplied will be a string with the class name. 

```javascript
    const divs = document.getElementsByClassName('divClass');
```

### `document.getElementById`

`getElementById` will find a single element based on it's id. It will return the element itself. The id supplied must be a string of the id name.

```javascript
    const div = document.getElementById('divId');
```

### `document.querySelector`

`querySelector` (and `querySelectorAll`) is a new method that takes a CSS style selector as it's argument. Remember that we can ask for classes in CSS using the `.`, ids using the `#`, and elements by using the element name (eg: `'body'`). These selectors will use the same format. It is best to only use ids with `querySelector` because it will only return the first item matching that selector. 

```javascript
    const div = document.querySelector('#divId');
```

### `document.querySelectorAll`

`querySelectorAll` works just like `querySelector` except it returns an array like object containing all elements that match the selector. Because of this, you can use ids OR class names with this method.

```javascript
    const divs = document.querySelectorAll('#divId');
```

### `document.createElement`

If we want to create an element to be added to our `DOM`, we can use `document.createElement`. This method takes one argument, the element type and returns an empty element of that type.

```javascript
    const newDiv = document.createElement('div');
```

## Element Methods and Properties

Once we have our elements selected we can use a wide range of methods and properties to affect everything on the element, including: changing the CSS styles, changing the attributes on the element, adding or removing the children of the element, adding or removing event listeners(clicks, etc). There are countless things we can do to affect the element. We will go over some basic methods and properties here.

### .innerHTML

When we have an element, we can set it's `innerHTML`. This is essentially setting the data that is stored between the opening and closing tags of the element.

```javascript
    const p = document.querySelector('#pId');
    console.log(p.innerHtml) // This is the text between the <p></p> tags

    p.innerHTML = 'This is new text to display between the tags';

    console.log(p.innerHTML); // This is new text to display between the tags
```

### .[attribute] and .setAttribute

We can call `.setAttribute` on an element to either add an attribute to the element or reassign one that is already on that element. calling `.[name of attribute] = [new value]` is a shorthand way of doing this.

```javascript
    const img = document.querySelector('#imgId');

    img.setAttribute('src', 'http://www.lambdaschool.com/lambdalogo.png');

    img.src = 'http://www.lambdaschool.com/lambdalogo.png';
```

### .style

Calling the `.style` property on an element gives us access to the styles associated with the element. Note, this does not give us access to the CSS styles, only the inline styles written in HTML. We chain the style we want to read, or affect, on to the end of the `.style` .We can use this to set certain styles on the element. 

```javascript
    const div = document.querySelector('#divId');

    div.style.height = '300px';
    div.style.background = 'red';
```

### .className and .id

Using the `.className` and `.id` properties we can read and reassign class names and ids. This is most useful when we have two different styles associated and we want to switch the element to another style.

```javascript
    const div = document.querySelector('#divId');

    console.log(div.id); // divId
    div.className = 'newClassName';
    div.id = 'newId';
```
### .appendChild

We have the ability to create a new element set its style, class, id, attributes, and innerHTML, and add it to the `DOM` directly. To do this we use `.appendChild` on a parent node:

```javascript
    const body = document.querySelector('body');
    const newDiv = document.createElement('div');

    body.appendChild(newDiv);

```
## Event Listeners

An event listener is a function that fires when an event occurs. Events can be anything from a click, to a mouse entering the content area, to an image download finishing. We will explore a few different events, but there are dozens we can choose from.

### Click

The most common event listener to assign to an element is the 'click handler' in fact, it is the only one with it's own property, `.onclick`. To use the onclick property, we set it equal to a function that we want fired each time the element is clicked.

```javascript
    const div = document.querySelector('#divId');
    div.onclick = function() {
        console.log('clicked!');
    };
```

### `addEventListener` and Other Events.

`.onclick` works if we want to add a click listener, but what happens if we want to fire a function when a user enters text in a form input, or the screen is scrolled. There are dozens of built in event listeners, but we must use `.addEventListener`. `.addEventListener` is a method that takes two arguments, the first is the type of event it is listening for, and the second is a callback function that is called when that event happens. Note: it is best to use addEventListener for all events, even clicks.

```javascript
    const div = document.querySelector('#divId');
    div.addEventListener('mouseenter', function() {
        console.log('mouse has entered!');
    });
```

You can find a list of all events here: [MDN: Events](https://developer.mozilla.org/en-US/docs/Web/Events)

Using these document methods coupled with the knowledge we have of Javascript, HTML, and CSS, we now how the tools to build a fully functional front end web application. 

## Additional Resources

* [MDN: DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* [MDN: script Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
* [MDN: Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
* [MDN: Events](https://developer.mozilla.org/en-US/docs/Web/Events)



