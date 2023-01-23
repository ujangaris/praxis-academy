var name_john = 'John'
var age_john = 22
var name_max = name_john
var age_max = 26

name_max = 'Max'

console.log('John Data ==> ', name_john, age_john)
console.log('Max Data ==> ', name_max, age_max)

// JavaScript references the value
console.log('<<< JavaScript references the value >>>')

let mike = { name: 'Mike' }
let odd = [1]
let morning = function () {
  return 'Greetings'
}

// re-design to new variables
let evening = morning
let john = mike
let even = odd

// redisign to new variables
let kate = mike
kate = { name: 'Kate' }

// modify prototype
evening.info = 'Evening Greetings Function'
john.name = 'John'
even[0] = 1

console.log('first ==>', morning.info, mike, odd)
console.log('second ==>', evening.info, john, even)

// Constructor Function
console.log('<<< Constructor Function >>>')

function Animal(name) {
  // `this is an object we are about to create
  this.name = name //add property name with value received from argunent

  // add method to the object
  this.getName = function () {
    //here `this` is olso the object as function belongs to the object
    return 'Aninmalm name is => ' + this.name
  }
}

let a = new Animal('Dog')
console.log('a object ==> ', a)
console.log('a getName() ==> ', a.getName())
console.log('a constructor === Animal', a.constructor === Animal) //true

// Prototype
console.log('<<< Prototype >>>')

function Animal2(name) {
  //this an object are about to create
  this.name = name //add property name with value received from argunent

  // add method to the object
  this.getName = function () {
    //here this is olso the object as function belongs to the object
    return 'Aninmalm name is => ' + this.name
  }
}

// log prototype
console.log(Animal2.prototype)

// __proto__ property
console.log('<<< __proto__ property >>>')

function Animal3(name) {
  this.name = name
}

//add getName function to the prototype
Animal3.prototype.getName = function () {
  return 'Aninmalm name is => ' + this.name
}

// add simple prototype on property
Animal3.prototype.generation = '100'

let a1 = new Animal3('Dog')

console.log('Animal.prototype ==> ', Animal3.prototype) //log prototype
console.log('a1.__proto__ ==> ', a1.__proto__) //log __proto__ property'
console.log(
  'Animal.prototype === a1.__proto__ : ',
  Animal3.prototype === a1.__proto__
) //true
console.log('a1.getName() ==> ', a1.getName()) //log method from prototype
console.log('a1.generation ==> ', a1.generation) //log property from prototype);

// Inheritance
console.log('<<< Inheritance >>>')
function Animal4(name) {
  this.name = name
}

//  add method to Animal prototype
Animal4.prototype.getClass = function () {
  return 'Animal class is : ' + this.className
}

function Dog(name) {
  this.name = name
}

// save Animal prototype to Dog prototype
Dog.prototype = Animal.prototype

// add method to Dog prototype
Dog.prototype.getName = function () {
  return this.name
}

// create Dog object
let d = new Dog('Tommy')
console.log(d) //log Dog object
console.log(d.__proto__) //log Dog prototype

// Class
console.log('<<< Class >>>')
function Animal5(className) {
  this.className = className
}

// add method to Animal prototype
Animal5.prototype.getClass = function () {
  return 'Animal class is : ' + this.className
}

function Dog2(name) {
  Animal.call(this, 'Animal') //pass this argujments
  this.name = name //add new property
}

// save Animal prototype to Dog prototype
Dog2.prototype = Object.create(Animal.prototype)

// add constructor reference on Dog prototype
Dog2.prototype.constructor = Dog

// add method to Dog prototype
Dog2.prototype.getName = function () {
  return this.name
}

// create Dog object
let d1 = new Dog2('Tommy')

console.log(d1) //log Dog object
// console.log(d1.getClass()) //log method from Animal prototype);
