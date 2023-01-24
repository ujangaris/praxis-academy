function Vehicle(make, model, color) {
  this.make = make
  this.model = model
  this.color = color
  this.getName = function () {
    return this.make + ' ' + this.model
  }
}

let car = new Vehicle('Honda', 'Civic', 'Red')
let car2 = new Vehicle('Toyota', 'Corolla', 'White')

car2.year = '2012'

console.log(car.getName())
console.log(car2.year)

// Prototype
// console.log('<<< Prototype >>>')
Vehicle.prototype.year = '2023'
console.log(car.year)

Vehicle.prototype.availableColors = ['Red', 'Blue', 'Green']
console.log(car.availableColors)
