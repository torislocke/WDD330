// ------------ hero html JavaScript -----------------

// assign form to variable named form
const form = document.forms['heroForm'];

// listen for the event of form being submitted and trigger makeHero function - this will create a hero object based on the 
// information provided in the hero form.
form.addEventListener('submit', makeHero, false);

// makeHero function to return hero object from form
function makeHero(event) {
	event.preventDefault(); // prevent the form from being submitted
	const hero = {}; // create an empty object literal
	hero.name = form.heroName.value; // create a name property based on the input fields value
	hero.realName = form.realName.value;
	// array iterators for checkboxes to loop over checked
	// spread operator ... turns the node list into an array which allows filter method to return array only contining checked boxes then chain the map method to the end which replaces each checkbox in the array with its value property.  This array is returned and stored in the hero.powers variable.
	hero.powers = [...form.powers].filter((box) => box.checked).map((box) => box.value);
	hero.category = form.category.value;
	hero.age = form.age.value;
	hero.city = form.city.value;
	hero.origin = form.origin.value;
	alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
	return hero;
}

form.addEventListener('submit', validate, false);
function validate(event) {
	const firstLetter = form.heroName.value[0];
	if (firstLetter.toUpperCase() === 'X') {
		event.preventDefault();
		alert('Your name is not allowed to start with X!');
	}
}
// Not working - need to resolve
// const label = form.querySelector('label');
// const error = document.createElement('div');
// error.classList.add('error');
// error.textContent = '! Your name is not allowed to start with X.';
// label.append(error);
// function validateInline() {
// 	const heroName = this.value.toUpperCase();
// 	if (heroName.startsWith('X')) {
// 		error.style.display = 'block';
// 	} else {
// 		error.style.display = 'none';
// 	}
// }
