## How does JS relate to web development?

1. The DOM ties JS and web development together.
2. JS allows interactivity and reactions within web pages without reloading the page.
3. The DOM is an object that is a JS approximation of the HTML structure of the web page.

JS is incorporated into the web page through the `<script>` tag.
Like with CSS, you can directly write JS in the element itself, but we'd rather link a separate .js file in the element.

If you remember, it was taught that you should put the `<script>` tag near the end of the page (before the closing `</body>` tag), so that the rest of the page does not need to wait for the JS to load before rendering the page.

However, you can put the `<script>` in the `<head>`, or anywhere really, and still have not the rest of the web page contingent on it loading by adding the `async` keyword as an attribute.

```html
<script type="text/javascript" src="./index.js" async></script>
```

## The `document` in the Document Object Model

If you open your console and type in document, you actually get an output out. The output is an object that represents the HTML of the page. (*In some browsers, the browser may present the object in normal HTML-like code for ease of use. Remember, this is a JS object, not just HTML being spit out.*)

## Changing attributes

Remember, what you get from query selectors and so forth is an object that represents the HTML. This means that *attributes of that HTML element are properties of the object*. That means you can do something like this:

```js
const img = document.querySelector('img');
img.src = "./someimage.jpg";
```

You can also use `.setAttribute`:

```javascript
    const img = document.querySelector('#imgId');
    img.setAttribute('src', 'http://www.lambdaschool.com/lambdalogo.png');
```

## Creating New Elements

You can create a new element with Js.

```js
const newP = document.createElement('p');
newP.innerHTML = 'Brand new paragraph';
newP.style.border = '1px dashed black';
```

However, the process is not that straightforward. We indeed made a new `<p>` element, with text and styles, but this `<p>` element is floating around and not part of the DOM. We have to attach it to the DOM somehow. You can do that with `.appendChild()`.

```js
// continued from above
const parentDiv = document.querySelector('#parent');
parentDiv.appendChild(newP);
```

The above attaches the `newP` element to the HTML element with the `#parent` ID.

## Using JS for Interactivity

```js
const button = document.querySelector('button');
button.addEventListener('click', function() {
    const newP = document.createElement('p');
    newP.innerHTML = 'You just clicked!';

    const parentDiv = document.querySelector('#parent');
    parentDiv.appendChild(newP);
});
```

There's a lot of event listeners, properties, methods, etc. related to the DOM. Be sure to use online resources to reference these things, such as w3schools.

