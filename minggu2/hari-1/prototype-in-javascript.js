// Prototype in JavaScript
console.log('<<< Prototype in JavaScript >>>')
// function constructor
function Person(name, job, yearOfBirth) {
  this.name = name
  this.job = job
  this.yearOfBirth = yearOfBirth
}

// adding calculateAge() method to the prototype
Person.prototype.calculculateAge = function () {
  console.log('The current age is: ', 2020 - this.yearOfBirth)
}
// this will show Person's prototype property
console.log('Person.prototype ==> ', Person.prototype)

// creating Object Person1
let person1 = new Person('John', 'Teacher', 1990)
console.log('person1 ==> ', person1)
let person2 = new Person('Jane', 'Designer', 1985)
console.log('person2 ==> ', person2)

person1.calculculateAge()
person2.calculculateAge()
