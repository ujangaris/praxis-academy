// The “class” syntax
/* class MyClass {
    // class methods
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    method3() { ... }

} */

// The “class” keyword
class User {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    alert(this.name)
  }
}

// usage:
let user = new User('John')
user.sayHi()

console.log(typeof User) // function
console.log(typeof User.prototype.sayHi) // function
