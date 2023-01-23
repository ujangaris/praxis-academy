// Constructor Functions

function Hero(name, level) {
  this.name = name
  this.level = level
}

let hero1 = new Hero('Udin', 1)

console.log(hero1)

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`
}

hero1.greet()
console.log(hero1.greet())

// characterSelect
// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level)
  // Add a new property,
  this.weapon = weapon
}

// Initialize healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level)
  this.spell = spell
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}`
}
Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}`
}

const hero3 = new Warrior('Udin', 1, 'sword')
const hero4 = new Healer('Mukidin', 1, 'heal')

console.log(hero3)
console.log(hero4)
console.log(hero3.attack())
// console.log(hero3.greet()) //ini akan erorr karena tidak ada di prototype warrior

// untuk mengatasi error tersebut
// kita bisa menggabungkan prototype dari warrior dan hero

Object.setPrototypeOf(Warrior.prototype, Hero.prototype)
Object.setPrototypeOf(Healer.prototype, Hero.prototype)
//all prototype methods added below

console.log(hero3.greet())
