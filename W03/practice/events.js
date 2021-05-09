// //The pageX and pageY properties show the number of pixels from the left and top, respectively, where the event took place in thedocument. This property takes account of whether the page has been scrolled.
function doSomething(event) {
	console.log(
		`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`
	);
}
addEventListener('click', doSomething);

const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event) {
	event.target.classList.toggle('highlight');
}

//The mouseover event occurs when the mouse pointer is placed over the element to which the event listener is attached, while the mouseout event occurs when the mouse pointer moves away from an element. This example uses both the mouseover and mouseout events to change the color of the third paragraph (with an ID of 'mouse') when the mouse pointer hovers over it, and back again when it moves away from the paragraph:
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
//The mousemove event occurs whenever the mouse moves. It will only occur while the cursor is over the element to which it’s applied. The following line of code creates a log in the console whenever the mouse moves over the third paragraph:
mouseParagraph.addEventListener('mousemove', () => console.log('You Moved!'));

//The keydown event occurs when a key is pressed and willcontinue to occurif the key is held down.

//The keypress event occurs after a keydown event but before a keyup event. The keypress event only occurs for keys that produce character input (plus the 'Delete' key). This means that it’s the most reliable way to find out the character that was pressed on the keyboard.

//The keyup event occurs when a key is released.

/*pressing any key will result in the whole document changing color, because event listener was applied to the whole document. */
addEventListener('keydown', highlight);
/*To see the keyup event working, code uses an anonymous arrow function to show the exact time the key was released in the console*/
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date()}`));

/*addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

*/
addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));
