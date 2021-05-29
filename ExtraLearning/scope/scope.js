warrior = 'Ninja'; // warrior is defined
warrior3 = 'Viking'; // warrior 3 is defined var below will hoist

const warriorNew = {
	name: 'Jujin Take',
	type: 'Ninja',
	weapon: 'Shuriken',
	agility: 79,
}; // this is globally scoped

const screenWarrior = () => {
	// global function
	let warrior2 = 'Samurai'; // block scope keeps this within function - cannot be accessed outside of function
	// by creating a function within a function you create a closure
	warrior4 = 'Khan'; //global as it did not have let/const/var
	return {
		shootWarrior: () => {
			return console.log(warrior, warrior2, warrior3, warriorNew.name, warrior4);
		},
	};
};
const newWarrior = screenWarrior();
newWarrior.shootWarrior();

var warrior; // variable is declared and will hoist to top

var warrior3; //
//console.log(warrior, warrior2);

const warriorArray = [
	{
		name: 'Jujin Take',
		type: 'Ninja',
		weapon: 'Shuriken',
		agility: 79,
	}, // this is globally scoped
	{
		name: 'Tony Stark',
		type: 'Iron Man',
		weapon: 'Various',
		agility: 100,
	}, // this is globally scoped
	{
		name: 'Thor',
		type: 'Norse God',
		weapon: 'Lightening',
		agility: 100,
	}, // this is globally scoped
];

const seeWarriors = () => {
	return console.log(warriorArray);
};
seeWarriors();
/// ---------------  Local Scope Exercise -------

const screenPony = () => {
	var pony1 = 'Trixy';
	let pony2 = 'Sparkles';

	return `Pretty little ponies are ${pony1} and ${pony2}`;
};
// because they are local the names can be used again
const screenPony2 = () => {
	var pony1 = 'Pinky';
	let pony2 = 'Bubbles';

	return `Pretty little ponies are ${pony1} and ${pony2}`;
};
console.log(screenPony(), screenPony2());
// pony 1 and pony 2 are not available globally
//  console.log(pony1, pony2);

//// ----------------- number local and global

var numberOfPlatoon = 42;

const platoon = () => {
	// local variable
	let warriorsPerPlatoon = 60;

	// local
	let totalWarriors = numberOfPlatoon * warriorsPerPlatoon;
	return `The army is ${totalWarriors} strong`;
};

console.log(platoon());

