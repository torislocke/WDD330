export default class ToDoModel {
	constructor(controller) {
		let stored_data = localStorage.getItem('todo_content');
		if (stored_data === null) {
			this.data = [];
		} else {
			this.data = JSON.parse(stored_data);
		}
	}
	// add item to array
	addNewTodoItem(new_data) {
		this.data.push(new_data);
	}
	// save data to local storage
	// https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
	saveDataOnLocal() {
		let task = this;
		localStorage.setItem('todo_content', JSON.stringify(task.data));
	}
 // loop through the toDo list check if complete - if not, count for tasks left section of UI requirement
	leftTaskCounter() {
		let counter = 0;
		let list = this.data;

		list.forEach((el) => {
			if (el.completed == false) {
				counter += 1;
			}
		});
		return counter;
	}

	deleteTask(item_to_delete) {
		let the_list = this.data;
		let new_list = the_list.filter((el) => {
			if (el != item_to_delete) {
			}
			return el != item_to_delete;
		});

		this.data = new_list;
	}
// check if task is complete if not return as active for active filter
	getActiveTask() {
		let response = this.data.filter((el) => {
			return el.completed === false;
		});

		return response;
	}

	// check if task is marked complete for complete filter
	getCompleteTasks() {
		let response = this.data.filter((el) => {
			return el.completed === true;
		});

		return response;
	}
}
