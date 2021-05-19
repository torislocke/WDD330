'use strict';
//Refer the form to a variable called form.

/* create an item class using constructor function to instantiate an item object with a name property provided as an argument to the constructor function. */
const form = document.forms[0];
class Item {
	constructor(name) {
		this.name = name;
	}
}
/* create a controller object - event listener will check if user adds information to form and create a new instance of the model, then render the updated view. */
const controller = {
	watch(form) {
		form.addEventListener(
			'submit',
			(event) => {
				event.preventDefault(); // prevent the form from being submitted
				this.add(form.name.value);
			},
			false
		);
	},
	add(name) {
		const item = new Item(name);
		view.render(item);
	},
};
/* create a view object with a render() method to produce HTML fragment to show the instance's name (from the name property) stored in the model.  Dynamically inserted into the list using DOM API methods. */
const view = {
	render(item) {
		const list = document.getElementById('list');
		const li = document.createElement('li');
		li.innerHTML = item.name;
		list.appendChild(li);
		//reset the input field
		form.name.value = '';
	},
};
//call the watch method
controller.watch(form);
