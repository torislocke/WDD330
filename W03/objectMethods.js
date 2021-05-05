/* create a dice object that has a sides property and a roll() method that returns a number between 1 and the number of sides. */

const dice = {
	sides: 6,
	// roll() method inside dice object
	roll() {
		return Math.floor(this.sides * Math.random()) + 1;
	},
};
dice.roll();

/* This object has a sides property and a roll() method. Inside the roll() method we use this.sides to refer to the value of the object's sides property.  We also use the random() and floor() methods of the Math object to return a number between 1 and the number of sides.*/

const today = new Date();
/* A constructor function is used to create a new date object using the new operator: */


