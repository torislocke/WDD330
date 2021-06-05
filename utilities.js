// Local Storage Helper Functions

//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

export function readFromLocalStorage(key) {
	//retrieve stored objects and parse to an array
	let localArray = JSON.parse(localStorage.getItem(key));
	return localArray;
}

export function writeToLocalStorage(key, data) {
	//save updated array to local storage
	localStorage.setItem(key, JSON.stringify(data));
}

//   Helper function to add an event listener
// el is a DOM node representing the element that
//      the event will be added to or removed from.
// event is the type of event being listened for
// callback is the function that is to be run when the
//      event is triggered on that element.
export function addEvent(el, event, callback) {
	if ('addEventListener' in el) {
		// If addEventListener works
		el.addEventListener(event, callback, false); // Use it
	} else {
		// Otherwise
		el['e' + event + callback] = callback; // CreateIE fallback
		el[event + callback] = function () {
			el['e' + event + callback](window.event);
		};
		el.attachEvent('on' + event, el[event + callback]);
	}
}

// Helper function to remove an event listener
export function removeEvent(el, event, callback) {
	if ('removeEventListener' in el) {
		// If removeEventListener works
		el.removeEventListener(event, callback, false); // Use it
	} else {
		// Otherwise
		el.detachEvent('on' + event, el[event + callback]); // Create IE fallback
		el[event + callback] = null;
		el['e' + event + callback] = null;
	}
}
