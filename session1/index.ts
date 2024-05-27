// const now = new Date();

// now.sdfsldkfsd   Type script will tell you where is the error without running the code

/* 

const tody = new Date();
tody.getDay();
// tody.ddddddd;


class Color{


}

const red = new Color()
red.sdaf; Type script will tell you where is the error without running the code 

*/

/* _____________________________________________________________________________________________ */

// Type infrence => ts job

// let userName = 'hamada';
// userName = 5; // type script wil tell you type number not assginable to type string

/* _____________________________________________________________________________________________ */

// Type annotation => you as a developer
// let userName:string = 'hamada';  // you as a developer telling the type of the variable
// userName = 5; //
// userName = 'sadfsdf';

// let truth: boolean = true;
// let num: number = 5;
// let nothing: undefined = undefined;
// let nothingMatch: null = null;

/* _____________________________________________________________________________________________ */

// Built in object
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'yello'];
let myNumbers: number[] = [234, 23423, 34645, 23423];
let mtruthes: boolean[] = [true, true, false];

// clases
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
	x: 10,
	y: 5,
};

/* _____________________________________________________________________________________________ */

// Function
const longNumber = (i: number): void => {
	console.log(i);
};

const longNumber2: (i: number) => void = (i: number) => {
	console.log(i);
};

/* _____________________________________________________________________________________________ */

// fucntions return
// const json = '{"x":19,"y":5}';
// const coordinates: { x: number; y: number } = JSON.parse(json);
// console.log(coordinates);
// coordinates.sdddfd;

/* _____________________________________________________________________________________________ */

// When we declare a variable on a line and we initialize on another line

let words = ['red', 'green', 'yellow'];
let foundWord = false;

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true;
	}
}

/* _____________________________________________________________________________________________ */

// variable whose type can't be inferred
let numbers = [-10, 12, -1];
let numberAboveZero: boolean | number;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i];
	}
}

/* _____________________________________________________________________________________________ */

const add = (a: number, b: number): number => {
	return a + b;
};

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};
/* _____________________________________________________________________________________________ */

// Never vs Void

const logger = (message: string): void => {
	console.log(message);
};
const logger2 = (message: string): void => {
	console.log(message);
	return undefined;
};

// Not the right weay to handle error
const throwError = (message: string): never => {
	throw new Error(message);
};

const throwError2 = (message: string): string => {
	if (!message) {
		throw new Error(message);
	}
	return message;
};

// let someThing: void = undefined; =>> Undefined || Null
// let someThing: never;  =>> return nothing

/* _____________________________________________________________________________________________ */

// Destructing with Anootation
const today = {
	date: Date(),
	weather: 'sunny',
};

const logWeather = (today: { date: Date; weather: string }) => {
	console.log(today.date);
	console.log(today.weather);
};

// Es2015
const logWeather2 = ({ date, weather }) => {
	console.log(today.date);
	console.log(today.weather);
};

/* _____________________________________________________________________________________________ */

// Destructing
const logWeather3 = ({ date: weather }: { date: Date; weather: string }) => {
	console.log(today.date);
	console.log(today.weather);
};
