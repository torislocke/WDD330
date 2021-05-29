import ToDoController from './controller.js';

let toDo = new ToDoController();
toDo.renderToDoList();


const addNew = document.getElementById('submit'); // submit button
const inputField = document.getElementById('new_task'); // task content
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
