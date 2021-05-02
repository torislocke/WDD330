// a Mixin
let mixin = {
	madeIn() {
		console.log(`This car was made in year 2021!`);
	},
};
let carMixin = {
	__proto__: mixin,
	madeIn() {
		super.madeIn();
	},
};
// end of Mixin

sayHi();
// classes are not hoisted and cannot be overwritten - functions are hoisted and can be overwritten
// classes are automatically in strict mode introduced in ES5
class Car {
	constructor(autoName, doors, engine, color) {
		this.autoName = autoName;
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}
	// method outside of constructor with template literal ``
	carStats() {
		return `The ${this.autoName} car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
	}
	// static methods
	static totalDoors(car1, car2) {
		const doors1 = car1.doors;
		const doors2 = car2.doors;
		return doors1 + doors2;
	}
}
class SUV extends Car {
	constructor(doors, engine, color, brand, carStats) {
		super(doors, engine, color, carStats);
		this.brand = brand;
		this.wheels = 4;
		this.ac = true;

		// assign the mixin
		Object.assign(this, carMixin);
	}
	myBrand() {
		return console.log(`This SUV is a ${this.brand}`);
	}
}

const cx5 = new SUV('CX5', 4, 'V6', 'grey', 'Mazada');
const lexusSC = new Car('Lexus SC', 4, 'V8', 'black');

console.log(cx5);
// call the method to run the function call carStats
console.log(cx5.carStats());
console.log(lexusSC);
// call the method to run the function call carStats
// console.log(lexusSC.carStats());
console.log(Car.totalDoors(cx5, lexusSC));
console.log(cx5.myBrand());
console.log(cx5.madeIn());

// The below function demonstrates how functions are hoisted as it is called at the top of the script
function sayHi() {
	return console.log('Hellow this function can be called anywhere');
}
