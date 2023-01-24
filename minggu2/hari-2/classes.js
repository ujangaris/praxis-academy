// Method
console.log('<<< Method >>>')

class Retangle {
  constructor(height, width) {
    this.height = height
    this.width = width
  }

  // getter
  get area() {
    return this.calcArea()
  }
  //   method
  calcArea() {
    return this.height * this.width
  }

  *getSides() {
    yield this.height
    yield this.width
    yield this.height
    yield this.width
  }
}

const square = new Retangle(10, 10)

console.log(square.area) // 100
console.log(...square.getSides()) // 10 10 10 10

// Static methods and fields
console.log('<<< Static methods and fields >>>')
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static displayName = 'Point'
  static distance(a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y

    return Math.hypot(dx, dy)
  }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)
p1.displayName
p1.distance
p2.displayName
p2.distance

console.log(Point.displayName) // Point
console.log(Point.distance(p1, p2)) // 7.0710678118654755

// Inheritance
console.log('<<< Inheritance >>>')
class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`${this.name} makes a noise.`)
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name) // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`)
  }
}

let d = new Dog('Mitzie')
d.speak() // Mitzie barks.

// Inheritance super
console.log('<<< Inheritance super >>>')

class cat {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(`${this.name} makes a noise.`)
  }
}

class Lion extends cat {
  speak() {
    super.speak()
    console.log(`${this.name} roars.`)
  }
}

let l = new Lion('Fuzzy')
l.speak() // Fuzzy makes a noise. Fuzzy roars.

// Binding this with instance and static methods
console.log('<<< Binding this with instance and static methods >>>')

class Animal2 {
  speak() {
    return this
  }
  static eat() {
    return this
  }
}

let obj = new Animal2()
obj.speak() // Animal2 {}
let speak = obj.speak
speak() // undefined

Animal2.eat() // class Animal2
let eat = Animal2.eat
eat() // undefined
