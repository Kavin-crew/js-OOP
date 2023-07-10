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
