# Lesson 3: Intermediate CSS
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Introduction to positioning.
* Display property.
* Position property.
* Using the position property to position elements.
* Introduction to Flexbox.

## Introduction to positioning

Building a layout and making everything look clean is what most people are looking to do when they start learning CSS. Positioning HTML elements on the page with CSS is possibly the most powerful ability CSS has, it can also be the most frustrating. In this lesson we will learn a few different ways to position items on the page.

## The Display property

The display property is the one of the most important CSS properties for positioning. We can use the display property to control how the elements are displayed in relation to the elements around them, and how they behave on the screen. 
```css
  div {
    display: <display rule>;
  }
``` 

There are two types of display elements already built into HTML. Block and Inline. 

### Block Elements

As a rule of thumb, a block element will always start on a new line, and will always take up the maximum width of the container it is in. Remember how in the last lesson we learned that the \<p> element will always start on a new line? It is a block element, as is div and \<h1-6>

### Inline elements

Inline elements are the opposite of Block elements, it will not start on a new line and will only take enough space as is needed to display the data inside of it. span, a, and img elements are all inline elements.

We can control how an element behaves by using the display: property. If we want an inline element to act as a block element, we set:

```css
  div {
    display: block;
  }
```
And vise-versa.

### Display has a few other rules that we should be aware of that can be set on it:

### none 

Setting the display to "none" will make an element disappear completely. This is not to be confused with the "visibility: hidden;" rule which only renders the element invisible, but does not remove it from the page (the space will still look occupied by something). If an item is set to display: none there will be no sign of it on the page.

### flex

Flex is a new(CSS3) powerful tool that gives us the ability to control where on the page we want our items to be. We will talk about this later in this lesson

### grid

This is a new feature in CSS3 that will allow you to create a grid system inside of your element.

## The Position property

The position property will specify the type of positioning method used for an HTML element. There are 5 different methods available (we will go over 4 of them).
```css
  div {
    position: <positioning method>;
  }
``` 

### static

This is the default positioning of an element, setting an item to static will not affect the element's behavior in any way.

### relative

Setting a position to relative will keep the element positioned as if it were static, but this method will allow us the ability to set other positioning methods on the element that we will describe very soon.

### fixed

Setting an element as fixed will keep the element to a fixed place on the screen no matter how much you scroll or move the screen, it will remain in that place. Think about a header or menu bar on a webpage.

### absolute

Absolute is a lot like fixed, except it is anchored relative to its parent element (as long as the parent has any position method on it, except static).

## Using the position property to position elements

Now that we have set our position method to the style we want to use, we can then start position our element. (Note: this works for every position method other than "static", which will not affect the element in any way).

### top, left, right, and bottom

After we set a positioning method we can the use top, bottom, left, and right properties to position our element. The value you give to each of these will determine how far away from the edge we want our element to be. For example, if we want our element to be in the extreme upper left corner (with a fixed position) we would use the following:

```css
  div {
    position: fixed;
    top: 0;
    left: 0;
  }
```

If we wanted it to be 10px below the top and 10px off the right edge:

```css
  div {
    position: fixed;
    top: 10px;
    right: 10px;
  }
```

## Introduction to Flexbox

Introduced in CSS3, Flexbox is an exciting new feature. It allows us to position our elements in relation to it's parent and each other. No longer do we have to apply CSS "hacks" for things like centering. This allows mobile friendly design to really shine; and allows us to spend less time trying to get our positioning just right. Flexbox can quickly get complicated, but we will cover the basics of flexbox positioning here.

### display: flex and inline-flex

As we mentioned in the display property section, one of our display types can be "flex" this makes any container a flex block, we can also use "inline-flex" to make it a flex inline element. For the most part, we will just be using "flex".

### justify-content and align-items

Now that our container(element) is a flex box. We can imagine it as a grid, columns going from left to right and rows going from top to bottom. We can use the justify-contet and align-items properties to tell the flex box where we want our items to be on the grid. Initially "justify-content" will apply to the movement from left to right(row), and "align-items" will apply to the movement from top to bottom (column). We have a number of rules we can place on each of these properties:

* center: will center an item (or group of items) along the axis in which you apply this rule.
* flex-start: This is what each flex box is set to initially, it will display all of the items in a group at the very beginning of the row or column.
* flex-end: the opposite of flex-start, will display the item(s) at the end of the row/column
* space-between: This rule will evenly space your item(s) along the row/column. The first item will be at the flex-start, and the last will be at the flex-end
* space-around: Like space-between, but will put an equal margin between each item, so no item will be directly touching the edge.

example: if we wanted our items to be center in the exact middle of a flex box we would use the following:
```css
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
```

### flex-direction

This property can change the way our browser interprets justify-content(JC) and align-items(AI). The default is "row", and this works for us in the majority of cases, but sometimes we want to change the way direction works. 

* row: this is the default direction. JC applies from left to right, ai applies from top to bottom.
* column: This will flip which property controls which direction. JC will apply from top to bottom and ai will apply from left to right.
* row-reverse: Only flips the direction of JC from right to left, does not affect AI
* column-reverse: Only flips direction of AI from bottom to top, does not affect JC

### align-self

One last, more advanced, property we will cover is called "align-self". This will be applied to an element within a flex box that we want to break out of the align-items control. If we give it the property align-self we can position it anywhere along the align-items axis we want. (Note: there is NO justify-self, this is a primary reason developers will change the flex direction)

### Now in your browser window, open and complete homework.html

## Additional Resources

* [Flexbox Froggy (a great flexbox tutorial)](http://flexboxfroggy.com/)
* [CSS tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [MDN: Using CSS Flexible Boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
* [MDN: CSS display propery](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
* [MDN: CSS position property](https://developer.mozilla.org/en-US/docs/Web/CSS/position)









