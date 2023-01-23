let animal = {
  eats: true,
}
let rabbit = {
  jumps: true,
}

rabbit.__proto__ = animal // sets rabbit.[[Prototype]] = animal

console.log(rabbit.eats) // true
console.log(rabbit.jumps) // true

// method in animal
console.log('<<< method in animal >>>')
let animal2 = {
  eats: true,
  walk() {
    console.log('Animal walk')
  },
}
let rabbit2 = {
  jumps: true,
  __proto__: animal2,
}

// walk is taken from the prototype
rabbit2.walk() // Animal walk
console.log(rabbit2.jumps) // true)

// prototype chain can be longer
console.log('<<< prototype chain can be longer >>>')

let animal3 = {
  eats: true,
  walk() {
    console.log('Animal walk')
  },
}

let rabbit3 = {
  jumps: true,
  __proto__: animal3,
}

let longEar = {
  earLength: 10,
  __proto__: rabbit3,
}

// walk is taken from the prototype chain
longEar.walk() // Animal walk
console.log(longEar.jumps) // true (from rabbit)

// contoh lain:
console.log('<<< contoh lain >>>')
let user = {
  name: 'John',
  surname: 'Smith',
  set fullName(value) {
    ;[this.name, this.surname] = value.split(' ')
  },

  get fullName() {
    return `${this.name} ${this.surname}`
  },
}

let admin = {
  __proto__: user,
  isAdmin: true,
}

console.log(admin.fullName) // John Smith (*));
console.log(admin.isAdmin) // true);
console.log(user.fullName) // John Smith (**));

// Here in the line (*) the property admin.fullName has a getter in the prototype user,
// so it is called. And in the line (**) the property has a setter in the prototype, so it is called.

// The value of “this”
console.log('<<< The value of “this” >>>')

let animal4 = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`)
    }
  },
  sleep() {
    this.isSleeping = true
  },
}

let rabbit4 = {
  name: 'White Rabbit',
  __proto__: animal4,
}

// modifies rabbit.isSleeping
rabbit4.sleep()

console.log(rabbit4.isSleeping) // true)
console.log(animal4.isSleeping) // undefined (no such property in the prototype)

// for…in loop
console.log('<<< for…in loop >>>')
let animal5 = {
  eats: true,
}

let rabbit5 = {
  jumps: true,
  __proto__: animal5,
}

// Object.keys only returns own keys
console.log(Object.keys(rabbit5)) // jumps

// for..in loops over both own and inherited keys
for (let prop in rabbit5) console.log(prop) // jumps, then eats

// for…in loop and if statement
console.log('<<< for…in loop and if statement >>>')
let animal6 = {
  eats: true,
}

let rabbit6 = {
  jumps: true,
  __proto__: animal6,
}

for (let prop in rabbit6) {
  let isOwn = rabbit6.hasOwnProperty(prop)

  if (isOwn) {
    console.log(`Our: ${prop}`) // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`) // Inherited: eats
  }
}
