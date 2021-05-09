//JavaScript uses a prototypal inheritace model.  Every class has a prototype property that is shared by every instance of the class.  Any properties or methods of a class's prototype can be accessed by every object instantiated by that class.

// creates a class for ninja turtles
class Turtle {
	constructor(name) {
		this.name = name;
	}
	sayHi() {
		return `Hi dude, my name is ${this.name}`;
	}
	swim() {
		return `${this.name} paddles in the water`;
	}
}
// adding a new prototype property to the original class declaration.
Turtle.prototype.food = 'Pizza';
// adding a method to the prototype
Turtle.prototype.eat = function () {
	return `Mmm, this ${this.food} tastes great!`;
};

// create a new turtle instance

const leo = new Turtle('Leonardo');

const raph = new Turtle('Raphael');

const don = new Turtle('Donatello');
const mike = new Turtle('Michelangelo');

mike.weapon = 'Nunchakus';

/* the keyword super refers to the parent class and accesses any properties and call methods of the parent class. */
class NinjaTurtle extends Turtle {
    constructor(name) {
        super(name);
        this.weapon = 'hands';
    }
    attack() { return `Feel the power of my ${this.weapon}` };
}
const mikey = new NinjaTurtle('Michelangelo');

/* _color property is created as a variable inside the scope of the constructor function inside the class declaration.  This make is impossible to access outside this scope. The get and set color methods form a closure over the variable and provide controlled access to the property. */
		// let _color = color;
		// this.setColor = (color) => {
		// 	return (_color = color);
		// };
		// this.getColor = () => _color;
		// this.weapon = 'hands';
