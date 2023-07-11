'use strict';

const Person = function (firstname, birthYear) {
  // Instance properties
  this.firstname = firstname;
  this.birthYear = birthYear;

  // Never to this
  // this.calcAge = function() {
  //     console.log(2037 - this.birthYear);
  // }
};
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


// coding challenge#1
// my solution
const Car = function(make, speed){
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function(){
  console.log(this.speed += 10)
}

Car.prototype.break = function(){
  console.log(this.speed -= 5)
}

const bmw = new Car('BMW', 120)
const mercedes = new Car('Mercedes', 95)
console.log(bmw, mercedes);
// result: Object { make: "BMW", speed: 120 } Object { make: "Mercedes", speed: 95 }

bmw.accelerate();
// result: 130
bmw.break();
// result: 125
bmw.accelerate();
// result: 135

mercedes.accelerate();
// result: 105
mercedes.break();
// result: 100
mercedes.accelerate();
// result: 110