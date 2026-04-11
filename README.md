1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById is selected a single id and returns single element.
getElementsByClassName is selected class names and returns HTMLCollection.
querySelector is selected any css selector and returns Single Element first.
querySelectorAll is selected any css selector and returns NodeList.




2. How do you create and insert a new element into the DOM?
Ans: The document.createElement() method creates a new element node but doesn't place it on the screen yet. The JS code - 
//Create a new
const newDiv = document.createElement('div');
// If add some (content, classes, styles)
newDiv.textContent = “Hello World!";
newDiv.classList.add('highlight-box');
newDiv.style.color = 'red';
And Insert the Element: 
Once your element is ready, you need to tell JavaScript where to put it. append() and appendChild() , prepend(), before() and after(), insertAdjacentHTML()  to use this insert the elements. 



3. What is Event Bubbling and how does it work?
Ans: Event Bubbling is a fundamental concept in JavaScript that describes the order in which event handlers are executed when one element is nested inside another. 
When an event like a click happens on an element, it doesn't just stay there. The event moves through three phases, but bubbling is the most common one we interact with:
The Target Phase: The event happens exactly where you clicked (<button>).
The Bubbling Phase: The event "bubbles up" to the parent, then the grandparent, and so on, all the way up to the document and window.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a clever technique where you attach a single event listener to a parent element to manage events for all of its children present and future. And it is useful because better Performance and handling Dynamic Elements.




5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault():
It stops the default behavior that the browser associates with an HTML element.
The Action: It prevents the browser's "baked-in" reaction to an event.
The Propagation: The event still continues to travel (bubble) up the DOM tree to parent elements.
stopPropagation():
It stops the event from traveling further up (or down) the DOM tree.
 The default browser behavior still happens a link will still open.
It kills the "bubbling" process. Any event listeners attached to parent elements will never know the event occurred.

