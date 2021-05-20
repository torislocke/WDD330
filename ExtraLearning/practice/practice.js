// Learning ECMAScript 6+ Understanind Arrow Functions
// LinkedIn learning by Eve Porcello

let list = ['apple', 'banana', 'cherry'];
list.map((item) => console.log(item));
// prove can use any name
list.map((fruit) => console.log(fruit));

let person = {
	first: 'Angie',
	hobbies: ['bike', 'hike', 'ski'],
	printHobbies: function () {
		this.hobbies.forEach((hobby) => {
			let string = `${this.first} likes to ${hobby}`;
			console.log(string);
		});
	},
};
// call the function
person.printHobbies();

//working with generators
// the yield keyword hit pause, before calling the next function

function* director() {
	yield 'Three';
	yield 'Two';
	yield 'One';
	yield 'Action';
}
let countdown = director();
console.log('Promise with Yield');
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next());
console.log(countdown.next());

// promises - pass or fail

const delay = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

console.log('Zero seconds');
delay(1).then(() => console.log('Promise Delay - 1 second'));
delay(5).then(() => console.log('Promise Delay - 5 seconds'));

const spacePeople = () => {
	return new Promise((resolves, rejects) => {
		const api = 'http://api.open-notify.org/astros.json';
		const request = new XMLHttpRequest();
		request.open('GET', api);
		request.onload = () => {
			if (request.status === 200) {
				resolves(JSON.parse(request.response));

				// if any other typeof response console the error
			} else {
				rejects(Error(request.statusText));
			}
		};
		request.onerror = (err) => rejects(err);
		request.send();
	});
};
spacePeople().then(
	(spaceData) => console.log(spaceData),
	(err) => console.error(new Error("Can't load People"))
);

// same as above however using fetch native function of browser
// fetch returns a promise
let getSpacePeople = () => fetch('http://api.open-notify.org/astros.json').then((res) => res.json());

getSpacePeople().then(console.log);

let spaceNames = () =>
	getSpacePeople()
		.then((json) => json.people)
		.then((people) => people.map((p) => p.name))
		.then((names) => names.join(', '));
spaceNames().then(console.log);

// await is only available in a async function
const countToFive = async () => {
	console.log('Await Delay - zero seconds');
	await delay(1);
	console.log('Await Delay - one second');
	await delay(2);
	console.log('Await Delaytwo seconds');
};
countToFive();
