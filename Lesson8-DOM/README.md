# Lesson 8: DOM
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Introduction to the `DOM`
* The `script` Element
* `document`
* `document` Selectors
* Element Methods
* Event Handlers
* Deployment to Github Pages

## Introduction to the `DOM`

The `DOM` (as you will repeatedly hear it called) refers to 'Document Object Model'. When a browser loads a webpage, it takes all of the HTML and creates a model from it. Using Javascript we can access and manipulate that model. Adding and removing elements, changing attributes of elements, and changing styling of elements. 

## The `script` Element

We can inject our Javascript code into an HTML page by using the `script` element. We can do this two ways. 

First is to insert opening and closing script tags in the `head` element, the same way we would use the `title` or `style` elements. We then insert our Javascript code directly on the HTML page inline.

```html
    <html>
        <head>
            <script>
                //Here is our javascript code.
                alert("In our Javascript code");
            </script>
        </head>
    </html>
```

The second way is to use the script tag to retreive our external Javascript file and inject that into our HTML page. Note, the attributes (flags) we use in script are `type` which should be set to "text/javascript" and `src` which will be set to the location of your file:

```html
    <html>
        <head>
            <script type="text/javascript" src="./index.js">
        </head>
    </html>
```

## `document`

The first thing to note about Javascript running on a webpage is it's access to a global object called `document`. Remember that DOM stands for `Document Object Model`, the `document` object contains our DOM and prototype methods that allow us to access elements on the DOM and manipulate them. 

## `document` Selectors

`document` contains dozens of methods on it's prototype. But most useful are it's selectors.  We will take a look at the four most common.

### `document.getElementsByClassName`

`getElementsByClassName` will find elements based on their class names. It will return an array-like object that we can use to iterate through. The class name supplied will be a string with the class name. 

```javascript
    let divs = document.getElementsByClassName('divClass');
```

### `document.getElementById`

`getElementById` will find a single element based on it's id. It will return the element itself. The id suppllied must be a string of the id name.

```javascript
    let divs = document.getElementById('divId');
```

### `document.querySelector`

`querySelector` (and `querySelectorAll`) is a new method that takes a CSS style selector. Rememebr that we can ask for classes in CSS using the `#` and ids using the `.`. These selectors will use the same format. It is best to only use ids with `querySelector` because it will only return the first item matching that slector. 

```javascript
    let divs = document.querySelector('.divId');
```

### `document.querySelectorAll`

`querySelectorAll` works just like `querySelector` except it returns an array like object containing all elements that match the selector. Because of this, you can use ids OR class names with this method.

```javascript
    let divs = document.querySelectorAll('#divId');
```

### `document.createElement`

If we want to create an element to be added to our `DOM`, we can use `document.createElement`. This method takes one argument, the element type and returns an empty element of that type.

```javascript
    let newDiv = document.createElement('div');
```

## Element Methods and Properties

Once we have our elements selected we can use a wide range of methods and properties to affect everything on the element, including: changing the CSS styles, changing the attributes on the element, adding or removing the children of the element, adding or removing event listeners(clicks, etc). There are countless things we can do to affect the element. We will go over some basic methods and properties here.

### .innerHTML

When we have an element, we can set it's `innerHTML`. This is essentially setting the data that is stored between the openeing and closing tags of the element.

```javascript
    let p = document.querySelector('#pId');
    console.log(p.innerHtml) //This is the text between the <p></p> tags

    p.innerHTML = "This is new text to display between the tags"

    console.log(p.innerHTML) //This is new text to display between the tags
```

### .[attribute] and .setAttribute

We can call `.setAttribute` on an element to either add an attribute to the element or reassign one that is already on that element. calling `.[name of attribute] = [new value]` is a shorthand way of doing this.

```javascript
    let img = document.querySelector('#imgId');

    img.setAttribute('src', 'http://www.lambdaschool.com/lambdalogo.png')

    img.src = 'http://www.lambdaschool.com/lambdalogo.png'
```

### .style

Calling the `.style` property on an element gives us access to the styles associated with the element. Note, this does not give us access to the CSS styles, only the inlien styles written in HTML. We cahin the style we want to read, or affect, on to the end of the `.style` .We can use this to set certain styles on the element. 

```javascript
    let div = document.querySelector('#divId');

    div.style.height = '300px';
    div.style.background = 'red';
```

### .className and .id

Using the `.className` and `.id` properties we can read and reassign class names and ids. This is most useful when we have two different styles associated and we want to switch the element to another style.

```javascript
    let div = document.querySelector('#divId');

    console.log(div.id) //divId
    div.className = "newClassName";
    div.id = "newId"
```

## Event Listeners

An event lsitener is a function that fires when an event occurs. Events can be anything from a click, to a mouse entering the content area, to an image downlaod finishing. We will explore a few different events, but there are dozens we can choose from.

### Click

The most common event listener to assign to an element is the 'click handler' in fact, it is the only one with it's own property, `.onclick`. To use the onclick property, we set it equal to a function that we want fired each time the element is clicked.

```javascript
    let div = document.querySelector('#divId');
    div.onclick = function(){
        console.log("clicked!");
    }
```

### `addEventListener` and Other Events.

`.onclick` works if we want to add a click listener, but what happens if we want to fire a function when a user enters text in a form input, or the screen is scrolled. There are dozens of built in event listeners, but we must use `.addEventListener`. `.addEventListener` is a method that takes two arguments, the first is the type of event it is listening for, and the second is a callback function that is called when that event happens. Note: it is best to use addEventListener for all events, even clicks.

```javascript
    let div = document.querySelector('#divId');
    div.addEventListener("mouseenter" function(){
        console.log("mouse has enetered!");
    }
```

You can find a list of all events here: [MDN: Events](https://developer.mozilla.org/en-US/docs/Web/Events)

Using these document methods coupled with the knowledge we have of Javasc ript we can build a fully function front end web application. To start, open up the `homework` folder and read the README. 

## Deployment to Github Pages

Once we have an HTML, CSS, and JS file that all work in harmony together, we have a working web application. The final step is deployment. We are going to use a free service provided by Github called, [Github Pages](https://pages.github.com/). Github pages is simple to use, because you just specify in your github repository setting that you would like the repo published. You select 

## Additional Resources

* [MDN: Events](https://developer.mozilla.org/en-US/docs/Web/Events)



