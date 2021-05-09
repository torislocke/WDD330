const form = document.forms['search'];
form.addEventListener('submit', search, false);

const input = form.elements.searchInput;
// set default value within input box
input.value = 'Search Here';

function search(event) {
	alert(`You Searched for: ${input.value}`);
	event.preventDefault();
}

// default text will disappear when user clicks inside box
input.addEventListener(
	'focus',
	function () {
		if (input.value === 'Search Here') {
			input.value = '';
		}
	},
	false
);
// default text will appear if users leaves box blank
input.addEventListener(
	'blur',
	function () {
		if (input.value === '') {
			input.value = 'Search Here';
		}
	},
	false
);

// input.addEventListener('change', () => alert('changed'), false);
