// this builds user views

export default class ToDoView {
	constructor(controller) {
		this.controller = controller;
		let task = this;
		this.add_button = document.querySelector('.submit');
		this.taskContent = document.querySelector('.taskContent');
		this.list_container = document.querySelector('.list_container');

		this.add_button.addEventListener('click', (e) => {
			// stop the page refresh
			e.preventDefault();
			controller.createNewTask(task.taskContent.value);
			// clear the input field for next task
			this.taskContent.value = '';
		});
	}
	// display the task list
	renderTask(task) {
		if (task.is_active == true) {
			let check_or_not = task.completed === true ? 'checked="checked"' : '';

			const displayTask = document.createElement('li');
			displayTask.classList.add('todo_item');
			displayTask.innerHTML = `
                <label class="container">${task.description}
                    <input class="check_or_not" type="checkbox" ${check_or_not}>
                    <span class="checkmark"></span>                    
                </label>
               <button class="delete_button">X</button>

            `;
			// append tasks to the list container class parent element
			this.list_container.appendChild(displayTask);

			task.html_element = displayTask;
			this.renderTaskComplete(task);
		}
	}
	// Wireframe UI requirement change task display when checked through
	// adding a class and striking through the text with CSS - allow user
	// to toggle checkmark on and off
	renderTaskComplete(item) {
		if (item.completed === true) {
			item.html_element.querySelector('.container').classList.add('checked');
		} else {
			item.html_element.querySelector('.container').classList.remove('checked');
		}
	}
	// Wireframe UI requirement create tasks left / remaining counter
	// change displayed text from task to tasks if number over 1
	renderCounter(number) {
		if (number > 1) {
			document.querySelector('.taskLeft').innerHTML = `${number} Tasks Left`;
		} else {
			document.querySelector('.taskLeft').innerHTML = `${number} Task Left`;
		}
	}
}
