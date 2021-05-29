// functions and list construction

let toDoList = []; // set empty to do list array

// create toDos class
export default class ToDos {
	constructor(taskID) {
		this.parentElement = document.getElementById(taskID);
		this.key = this.parentElement.id;
	}
	// UI requirements:
	// Add a new task
	addToDo() {
		const taskContent = document.getElementById('new_task'); // retrieve user input calls saveToDo function
		saveToDo(this.key, taskContent);
		this.showToDoList();
	}
	// UI requirements:
	// Show a list of tasks
	showToDoList() {
		getToDos(this.key);
		renderToDoList(this.parentElement, toDoList);
		if (toDoList != null) {
			this.addEventListeners();
		}
	}
	// take action on checkbox and delete based on user action
	addEventListeners() {
		const listItems = Array.from(this.parentElement.children);
		if (listItems.length > 0 && listItems[0].children[0]) {
			listItems.forEach((item) => {
				//mark done
				item.children[0].addEventListener('click', (e) => {
					// call the completeToDo function
					this.completeToDo(e.currentTarget.id);
				});
				//delete
				item.children[3].addEventListener('click', (e) => {
					// call the deleteTask function
					this.deleteTask(e.currentTarget.parentElement.children[0].id);
				});
			});
		}
	}
	//toggle the checkbox on/off, change boolean of item to true/false
	completeToDo(itemID) {
		//find this individual task in the To Do List
		let oneTask = toDoList.findIndex((task) => task.id == itemID);
		//swap the boolean value (true = false, false = true)
		toDoList[oneTask].completed = !toDoList[oneTask].completed;
		//send the updated array to LocalStorage
		lsHelpers.writeToLocalStorage(this.key, toDoList);
		//call the mark done function
		markDone(itemID);
	}
	// function to delete a task from the array using splice
	deleteTask(itemID) {
		let oneTask = toDoList.findIndex((task) => task.id == itemID);
		toDoList.splice(oneTask, 1);
		lsHelpers.writeToLocalStorage(this.key, toDoList);
		this.showToDoList();
	}
	// function to filter based on users selection calling filterToDos
	addCategoryListeners() {
		//filter by category all, completed
		const listCategories = Array.from(document.querySelectorAll('.category'));
		listCategories.forEach((cat) => {
			cat.addEventListener('click', (e) => {
				for (let item in listCategories) {
					listCategories[item].classList.remove('selected_category');
				}
				e.currentTarget.classList.add('selected_category');
				this.filterToDos(e.currentTarget.id);
			});
		});
	}
	// 3: UI Requirements
	// filter tasks (complete/incomplete)
	filterToDos(category) {
		category = filterBy(category);
		const arrFilter = toDoList.filter((task) => {
			if (category != null) {
				return task.completed == category;
			} else {
				return task;
			}
		});
		renderToDoList(this.parentElement, arrFilter);
		this.addEventListeners();
	}
}
// function to store tasks in array within local storage using ls.js
function getToDos(key) {
	if (toDoList == null) {
		toDoList = [];
		let arrLocal = lsHelpers.readFromLocalStorage(key);
		if (arrLocal != null) {
			arrLocal.forEach((task) => toDoList.push(task));
		}
	}
	return toDoList;
}

function saveToDo(key, taskContent) {
	let taskArr = getToDos(key);
	let taskID = Date.now(); // generate ID based on timestamp

	// Requirement 4:
	// datasource: local storage - ls.js file
	// task id is timestamp, content is string,
	// completed is boolean.
	if (taskContent && taskContent.value) {
		const newTask = { id: taskID, content: taskContent.value, completed: false };
		taskArr.push(newTask);
		lsHelpers.writeToLocalStorage(key, taskArr);
		taskContent.classList.remove('error-input');
		taskContent.value = '';
	} else {
		taskContent.classList.add('error-input');
	}
	taskContent.focus(); // focus cursor on input
}
// UI requirements:
// Show a list of tasks
// function to render/display an empty list when no tasks found
function renderToDoList(parent, thisList) {
	parent.innerHTML = '';
	if (thisList != null && thisList.length > 0) {
		thisList.forEach((taskObject) => {
			parent.appendChild(renderToDo(taskObject));
		});
	} else {
		const emptyList = document.createElement('p');
		emptyList.innerHTML = `Create your first task!`;
		// document.getElementById('totals').classList.add('hide');
		parent.appendChild(emptyList);
	}

	updateCount(thisList);
}

// function to render/display list of to do items
function renderToDo(task) {
	const oneTask = document.createElement('li');
	task.completed ? oneTask.classList.toggle('completed') : '';
	oneTask.innerHTML = `<input id="${task.id}" name="${task.content}" type="checkbox" value="none" ${
		task.completed ? 'checked' : ''
	}>
        <label for="${task.id}" class="checkmark"></label><span class="toDo_content">${task.content}</span>
         <button class="remove delete-todo">X</button>`;
	return oneTask;
}
// UI requirements function to show number of tasks
// function to update the task counter
function updateCount(taskRemain) {
	console.log('updateCount invoked');
	// retrieve node list of all li's
	let task = document.getElementsByTagName('li');
	console.log(`this is the number of tasks ${task.length}`);
	taskRemain.forEach((task) => {
		if (task.classList === 'completed') {
			taskCount = task++;
			console.log(`completed tasks ${task.length}`);
			console.log(`The task count is ${taskCount}`);
		} else {
			console.log(`the number of tasks left ${task.length}`);
		}
	});
}
// 	let taskCount = 0;

// 	taskRemain.forEach((task) => {
// 		if (task.completed === false && task.completed != null) {
// 			taskCount++;
// 			console.log(`the number is ${taskCount}`);
// 			if (taskCount > 1) {
// 				const remainingTasksID = document.getElementById('remainingTasks');
// 				remainingTasksID.innerHTML = `${taskCount} Tasks Left`;
// 			} else {
// 				const remainingTasksID = document.getElementById('remainingTasks');
// 				remainingTasksID.innerHTML = `${taskCount} Task Left`;
// 			}
// 		} else {
// 			console.log('No tasks found');
// 			console.log(`the number is ${taskCount}`);
// 		}
// 	});
// }

//function to mark task as complete/done
function markDone(itemID) {
	let taskCategory = document.getElementById(itemID).parentElement;
	taskCategory.classList.toggle('completed');
}

//function to filter list by active, completed, or all
function filterBy(category) {
	switch (category) {
		case 'filter-active':
			category = false;
			break;
		case 'filter-completed':
			category = true;
			break;
		case 'filter-all':
			category = null;
			break;
	}
	return category;
}

// import local storage  helpers
import * as lsHelpers from './ls.js';
