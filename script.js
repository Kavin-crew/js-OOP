'use strict';

// constructor class
// const Person = function (firstname, birthYear) {
//   // Instance properties
//   this.firstname = firstname;
//   this.birthYear = birthYear;

//   // Never to this
//   // this.calcAge = function() {
//   //     console.log(2037 - this.birthYear);
//   // }
// };
// const jonas = new Person('Jonas', 1992);
// console.log(jonas);
// // result: Object { firstname: "Jonas", birthYear: 1992 }

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} Linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);

// console.log(jonas instanceof Person);
// // result: true
// Person.prototype.calcAge = function () {
//   console.log(new Date().getFullYear() - this.birthYear);
// };

// jonas.calcAge();
// // result: 31

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// // result: true
// console.log(Person.prototype.isPrototypeOf(Person));
// // result: false

// // creates a new property in the Person Object
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);
// // result: Homo Sapiens Homo Sapiens

// console.log(jonas.hasOwnProperty('firstname'));
// // result: true
// console.log(jonas.hasOwnProperty('species'));
// // result: false

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [0, 3, 2, 5, 2, 7, 9, 6, 1, 2, 3, 4, 5, 6];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.log(h1);
// console.dir(x => x + 1);

// // coding challenge#1
// // my solution
// const Car = function(make, speed){
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function(){
//   console.log(this.speed += 10)
// }

// Car.prototype.break = function(){
//   console.log(this.speed -= 5)
// }

// const bmw = new Car('BMW', 120)
// const mercedes = new Car('Mercedes', 95)
// console.log(bmw, mercedes);
// // result: Object { make: "BMW", speed: 120 } Object { make: "Mercedes", speed: 95 }

// bmw.accelerate();
// // result: 130
// bmw.break();
// // result: 125
// bmw.accelerate();
// // result: 135

// mercedes.accelerate();
// // result: 105
// mercedes.break();
// // result: 100
// mercedes.accelerate();
// // result: 110

// ES6 Classes
// // class expression
// const PersonCL = class{}

// class declaration
// class PersonCl{
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge(){
//     console.log(2023 - this.birthYear);
//   }

//   greet(){
//     console.log(`Hey ${this.fullName}`)
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   set fullName(name) {
//     if(name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Stellar', 1996)
// console.log(jessica)
// // result: Object { firstname: "Jessica", birthYear: 1996 }

// jessica.calcAge();
// // result: 27

// console.log(jessica.__proto__ === PersonCl.__proto__);
// // result: true

// // PersonCl.prototype.greet = function(){
// //   console.log(`Hey ${this.firstname}`)
// // }
// jessica.greet();
// // result: Hey Jessica

// Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },

//   init(firstname, birthYear) {
//     this.firstname = firstname;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// // creating properties
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// // result: 21

// // adding new properties better way
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1950);
// sarah.calcAge();
// // result: 73

// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.

// Test data:
// § Data car 1: 'Ford' going at 120 km/h

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     console.log((this.speed += 10));
//   }

//   brake() {
//     console.log((this.speed -= 5));
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford);
// // result: Object { make: "Ford", speed: 120 }
// ford.accelerate();
// // result: 140
// console.log(ford.speedUS);
// // result: 81.25
// ford.accelerate();
// // result: 140

const Person = function (firstname, birthYear) {
  this.firstname = firstname;
  this.birthYear = birthYear;
};
// add calcAge method
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstname, birthYear, course) {
  // this.firstname = firstname;
  // this.birthYear = birthYear;

  // to inherit the person properties
  Person.call(this, firstname, birthYear);
  this.course = course;
};

// to inherit student to person
Student.prototype = Object.create(Person.prototype);

// add method to the student class
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstname} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// result: My name is Mike and I study Computer Science

// to fix the display of Person instead of Student
Student.prototype.constructor = Student;

// coding challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// Car.prototype.brake = function () {
//   console.log((this.speed -= 5));
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   // this.charge += chargeTo;
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `'${this.make}' going at ${this.speed}, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 22);

// console.log(EV, tesla, Car);
// tesla.chargeBattery(5);
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(5);
// tesla.accelerate();

// ES6 Classes
// class expression
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey theke 👋');
//   }
// }

// class StudentCL extends PersonCl {
//   // creating constructor will be optional if we don't need to add a new property in the child
//   // since we need to add course, then we need to create a constructor to inherit properties and methods to the parent
//   constructor(fullName, birthYear, course) {
//     // Always need to happen first to inherit the properties and methods
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${
//         2023 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2023 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCL('Martha Jones', 1992, 'Computer Science');
// martha.introduce();
// // result: My name is Martha Jones and I study Computer Science
// martha.calcAge();
// // result: I'm 31 years old, but as a student I feel more like 41
