let getSpacePeople = () =>
	// fetch is asynchronous
	fetch('http://api.open-notify.org/astros.json').then((res) => res.json());

let spaceNames = () =>
	getSpacePeople()
		.then((json) => json.people)
		// use .map to return an array of names
		.then((people) => people.map((p) => p.name))
		// use .join to join them together
		.then((names) => names.join(', '));

spaceNames().then(console.log);

// fetch request to git hub api
const githubRequest = async (login) => {
	// login is an argument passed in
	let response = await fetch(`https://api.github.com/users/${login}`);
	// convert response to json to use in
	let json = await response.json();
	let summary = `${json.name}, ${json.company}`;
	console.log(summary);
};

githubRequest('eveporcello');
