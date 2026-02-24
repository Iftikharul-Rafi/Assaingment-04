01. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 

Ans : getElementById, getElementsByClassName, and querySelector, querySelectorAll are JavaScript DOM methods used to select elements, but they differ in how they work. getElementById selects a single element by its unique id and returns only one element. It is fast and straightforward. getElementsByClassName selects elements by class name and returns a live HTMLCollection, which updates automatically if the DOM changes. querySelector and querySelectorAll use CSS selectors. querySelector returns the first matching element, while querySelectorAll returns all matching elements as a NodeList, which is not live. In short, use getElementById for a single id, getElementsByClassName for multiple elements with a class , and querySelector querySelectorAll for more flexible CSS-based selection.

02. How do you create and insert a new element into the DOM? 

Ans : To create and insert a new element into the DOM, you first use document.createElement to create the element. Then, you can add content or attributes to it, and finally insert it into the document using methods like appendChild or append. For example, you create a new paragraph using document.createElement("p"), set its text using textContent, and then insert it into a parent element using appendChild. In short, the process involves three steps: create the element, customize it (add text/attributes), and insert it into a parent element in the DOM. 

03. What is Event Bubbling? And how does it work? 

Ans : Event Bubbling is a process where an event starts from the target element and then moves upward through its parent elements in the DOM. For example, if you click a button inside a div, the click event first runs on the button, then on the div, and continues up to the document. This happens by default in JavaScript and helps in handling events efficiently, especially using event delegation. 

04. What is Event Delegation in JavaScript? Why is it useful? 

Ans : Event Delegation is a JavaScript technique where a single event listener is added to a parent element to handle events for its child elements. It works because of event bubbling, where events move from the child up to the parent. Instead of attaching multiple listeners to many child elements, you use one listener on the parent and identify the clicked child using event.target. It is useful because it improves performance, keeps the code cleaner, and works automatically for dynamically added elements. 

05. What is the difference between preventDefault() and stopPropagation() methods? 

Ans : preventDefault and stopPropagation are both event methods in JavaScript, but they serve different purposes. preventDefault is used to stop the browser’s default behavior for an event. For example, it can prevent a form from submitting or stop a link from navigating to another page. On the other hand, stopPropagation prevents the event from moving up the DOM tree. It stops the event from triggering parent element event handlers. In short, preventDefault stops the default browser action, while stopPropagation stops the event from bubbling or propagating further.