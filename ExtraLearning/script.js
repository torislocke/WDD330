'use strict';
/* ------------  Named Function ------------------- 
    The below function works because the function is not called
     until after the variables have been defined 
--------------------------------------------------- */
function findBiggestFraction() {
	a > b ? console.log('a: ', a) : console.log('b: ', b);
}
var a = 3 / 4;
var b = 5 / 7;

findBiggestFraction();

// End short program to compare fractions

// The below version passes argurments which allows the function
// to be resuable
function findBiggestFraction(a, b) {
	a > b ? console.log('a: ', a) : console.log('b: ', b);
}
var firstFraction = 3 / 4;
var secondFraction = 5 / 7;

// this passes the two vars as arguments into the function as a and b
findBiggestFraction(firstFraction, secondFraction);
//
function findBiggestFraction(a, b) {
	var result;
	a > b ? (result = ['firstFraction', a]) : (result = ['secondFraction', b]);
	return result;
}
var firstFraction = 3 / 4;
var secondFraction = 5 / 7;

// this passes the two vars as arguments into the function as a and b
var fractionResults = findBiggestFraction(firstFraction, secondFraction);
console.log(fractionResults);

console.log('first fraction result: ', firstFraction);
console.log('second fraction result: ', secondFraction);
console.log('Fraction ' + fractionResults[0] + ' with a value of ' + fractionResults[1] + ' is the biggest');

/* ------------  Anonymous Function ------------------- 
    The below function works because the function is not called
     until after the variables have been defined 
--------------------------------------------------- */
var a = 5 / 7;
var b = 18 / 25;
var theBiggest = function () {
	var result;
	a > b ? (result = ['a', a]) : (result = ['b', b]);
	console.log(result);
	return result;
};
// the below calls the anonymous function
theBiggest();
console.log(theBiggest());

/* ------------  Immediately Invoked Function ------------------- 
    The below function works because the function is not called
     until after the variables have been defined 
--------------------------------------------------- */

var theBiggest = (function () {
	var result;
	a > b ? (result = ['a', a]) : (result = ['b', b]);
	console.log(result);
	return result;
})(7 / 9, 13 / 15);
// the below calls the anonymous function

var firstFraction = 5 / 7;
var secondFraction = 18 / 25;

console.log(theBiggest);

/// would not work as the variables are after the immediately invoked function
var theBiggest = (function () {
	var result;
	a > b ? (result = ['a', a]) : (result = ['b', b]);
	console.log(result);
	return result;
})(firstFraction, secondFraction);
// the below calls the anonymous function

var firstFraction = 5 / 7;
var secondFraction = 18 / 25;

console.log(theBiggest);

/// this works immediately invoked function

var firstFraction = 5 / 7;
var secondFraction = 18 / 25;
var theBiggest = (function () {
	var result;
	a > b ? (result = ['a', a]) : (result = ['b', b]);
	console.log(result);
	return result;
})(firstFraction, secondFraction);
// the below calls the anonymous function

console.log(theBiggest);

/* --------------------- Variable Scope Example -------------------- */
// using var - will return "I'm different in both instances"
function logScope() {
	var localVar = 2;

	if (localVar) {
		var localVar = "I'm different!";
		console.log('nested localVar: ', localVar);
	}
	console.log('logScope localVar: ', localVar);
}
logScope();

// using let - will return "I'm different" and "2" because let is scoped
// to it code block
function logScope() {
	let localVar = 2;

	if (localVar) {
		let localVar = "I'm different!";
		console.log('nested localVar: ', localVar);
	}
	console.log('logScope localVar: ', localVar);
}
logScope();
