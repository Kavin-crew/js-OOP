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
const jonas = new Person('Jonas', 1992);
console.log(jonas);
// result: Object { firstname: "Jonas", birthYear: 1992 }

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} Linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);

console.log(jonas instanceof Person);
// result: true
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

jonas.calcAge();
// result: 31

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
// result: true
console.log(Person.prototype.isPrototypeOf(Person));
// result: false

// creates a new property in the Person Object
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);
// result: Homo Sapiens Homo Sapiens

console.log(jonas.hasOwnProperty('firstname'));
// result: true
console.log(jonas.hasOwnProperty('species'));
// result: false

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [0, 3, 2, 5, 2, 7, 9, 6, 1, 2, 3, 4, 5, 6];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(h1);
console.dir(x => x + 1);
