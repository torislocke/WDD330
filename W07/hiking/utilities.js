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
