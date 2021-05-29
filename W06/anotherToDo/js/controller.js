import ToDoModel from './model.js';
import ToDoView from './view.js';

export default class ToDoController {
	constructor() {
		let task = this;
		this.model = new ToDoModel(task);
		this.view = new ToDoView(task);
		// set default active filter to "all" for styling and usability
		this.active_filter = 'all';
	}
	// Wireframe requirement { id : timestamp, content: string, completed: bool }
	createNewTask(taskContent) {
		let new_todo_item = {
			description: taskContent,
			is_active: true, // for ease of search
			completed: false, // boolean requirement
			id: Date.now(),
		};

		this.model.addNewTodoItem(new_todo_item);
		this.model.saveDataOnLocal();
		this.renderToDoList();
	}

	renderToDoList(filter = this.active_filter) {
		this.view.list_container.innerHTML = '';
		let task = this;
		let list_to_render;

		if (filter == 'active') {
			list_to_render = this.model.getActiveTask();
		} else if (filter == 'complete') {
			list_to_render = this.model.getCompleteTasks();
		} else {
			list_to_render = this.model.data;
		}

		list_to_render.forEach((el) => {
			task.view.renderTask(el);
		});

		list_to_render.forEach((item) => {
			if (item.is_active === true) {
				item.html_element.querySelector('.delete_button').addEventListener('click', () => {
					task.deleteToDoItem(item);
					task.renderToDoList();
				});

				item.html_element.querySelector('.check_or_not').addEventListener('click', () => {
					if (item.completed === true) {
						item.completed = false;
					} else {
						item.completed = true;
					}

					task.view.renderTaskComplete(item);
					task.model.saveDataOnLocal();
					this.leftTaskCounter();
					this.renderToDoList();
				});
			}
		});

		this.leftTaskCounter();
		this.addLogicToFilter();
	}

	deleteToDoItem(item) {
		this.model.deleteTask(item);
		//item.is_active = false;
		item.html_element.remove();
		this.model.saveDataOnLocal();
	}

	leftTaskCounter() {
		let n_left_tasks = this.model.leftTaskCounter();
		this.view.renderCounter(n_left_tasks);
	}

	addLogicToFilter() {
		let task = this;
		
		document.querySelector('.all_item').addEventListener('click', () => {
			document.querySelector('.all_item').classList.add('filter_item_active');
			// Removing the styles from inactive filters
			document.querySelector('.complete_item').classList.remove('filter_item_active');
			document.querySelector('.active_item').classList.remove('filter_item_active');

			task.active_filter = 'all';
			task.renderToDoList();
		});

		document.querySelector('.complete_item').addEventListener('click', () => {
			document.querySelector('.complete_item').classList.add('filter_item_active');
			// Removing the styles from inactive filters
			document.querySelector('.all_item').classList.remove('filter_item_active');
			document.querySelector('.active_item').classList.remove('filter_item_active');

			task.active_filter = 'complete';

			task.renderToDoList();
		});

		document.querySelector('.active_item').addEventListener('click', () => {
			document.querySelector('.active_item').classList.add('filter_item_active');
			// Removing the styles from inactive filters
			document.querySelector('.complete_item').classList.remove('filter_item_active');
			document.querySelector('.all_item').classList.remove('filter_item_active');

			task.active_filter = 'active';
			task.renderToDoList();
		});
	}
}
