// master controller leveraging utilities for functions and variables
import ToDos from './utilities.js';
const myToDoList = new ToDos('todo');
window.addEventListener('load', () => {
	myToDoList.showToDoList(); // calls function from utilities.js
	myToDoList.addCategoryListeners(); // calls function from utilities.js
});
const inputField = document.getElementById('new_task'); // task content
const addNew = document.getElementById('addnew'); // submit button
addNew.addEventListener('click', () => {
	myToDoList.addToDo(); // calls function from utilities.js
});


// add the to do item if user hits enter
// multiply methods to ensure browser support
inputField.addEventListener('keyup', function (e) {
	if (e.key === 13) {
		e.preventDefault();
		addNew.click();
	} else if (e.keyIdentifier === 13) {
		e.preventDefault();
		addNew.click();
	} else if (e.keyCode === 13) {
		e.preventDefault();
		addNew.click();
	}
});
