// chapter nine JavaScript: Novice to Ninja, 2nd Edition

const cookies = document.cookie.split('; ');
for (crumb of cookies) {
	const [key, value] = crumb.split('=');
	console.log(`The value of ${key} is ${value}`);
}
// accepts a callback to a function as its first
// parameter and a number of milliseconds as its 2nd
// window.setTimeout(() => alert("Time's Up!"), 3000);


