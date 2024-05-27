// Object
const profile = {
	name: 'ali',
	age: 34,
	coords: {
		lat: 0,
		lng: 5,
	},
};

// const age = profile.age;

// destructuring
const { age }: { age: number } = profile;
// destructuring with annotation
const {
	coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

/* _____________________________________________________________________________________________ */

// array

const carMarks = ['toyota', 'chevy'];
// help with inference whe  extracting values

const car = carMarks[0];
const myCar = carMarks.pop();

// prevent incompatible values
// carMarks.push(5); // ==>> This with throw an error

// Help with map
carMarks.map((car: string): string => {
	return car;
});
/* _____________________________________________________________________________________________ */

// flexible type array
const importantDates = [new Date(), '2050-19'];

const importantDates1: (Date | string)[] = [];

// importantDates1.push(23)  // ==>> This with throw an error

importantDates1.push('23');

/* _____________________________________________________________________________________________ */

// Tuples

const soda = {
	color: 'brown',
	sugar: 40,
	carbonated: true,
};

const sodaT = ['brown', 40, true];

const sodaTa: [string, number, boolean] = ['brown', 40, true];

/* _____________________________________________________________________________________________ */

// interface + classes  = How we get really strong code reuse in TS

const oldCar = {
	name: 'civic',
	year: 2000,
	broken: true,
	summary(): string {
		return 'string';
	},
};

// Bad example of trying to use annotation without interface
const printVehicle = (oldCar: {
	name: string;
	year: number;
	broken: boolean;
}): void => {
	console.log(
		`name:${oldCar.name} year: ${oldCar.year} broken: ${oldCar.broken}`
	);
};

interface vehicle {
	name: string;
	year: number;
	broken: boolean;
	summary(): string;
}

// Good example of trying to use annotation with interface
const printVehicle1 = (oldCar: vehicle): void => {
	console.log(
		`name:${oldCar.name} year: ${oldCar.year} broken: ${oldCar.broken}`
	);
};

/* _____________________________________________________________________________________________ */

// Class => classes with methods / classes with values

class Vehicle {
	drive(): void {
		console.log('hi');
	}
	honk(): void {
		console.log('beeb');
	}
}

class Car extends Vehicle {
	drive(): void {
		console.log('bye');
	}
}

const car1 = new Car();

const vehicle = new Vehicle();

vehicle.drive();
vehicle.honk();

car1.drive();
car1.honk();

/* _____________________________________________________________________________________________ */

// modifiers => public / private / protected
/* 
class Car2 extends Vehicle {
	private drive(): void {
		console.log('bye');
	}
} 
*/

class Car3 extends Vehicle {
	private drive1(): void {
		console.log('bye');
	}
	protected honk1(): void {
		console.log('bye');
	}
	startDrivingProcess(): void {
		this.drive1();
		this.honk1();
	}
}

const newCar = new Car3();
// newCar.honk1();

/* _____________________________________________________________________________________________ */

class Vehicle3 {
	// color: string = 'red';

	constructor(public color: string) {

	}
}

const myNewVicle = new Vehicle3('aqua');

console.log(myNewVicle.color);
