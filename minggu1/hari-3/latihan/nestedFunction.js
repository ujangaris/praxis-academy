// contoh 1
console.log('<<== contoh 1 ==>>')
function sayHiBye(firstName, lastName) {
  // local variable
  function getFullName() {
    return firstName + ' ' + lastName
  }

  console.log('Hello, ' + getFullName())
  console.log('Bye, ' + getFullName())
}

sayHiBye('John', 'Doe') // Hello, John Doe

// contoh 2
console.log('<<== contoh 2 ==>>')
function makeCounter() {
  let count = 0

  return function () {
    return count++
  }
}

let counter = makeCounter()

console.log(counter()) // 0);
console.log(counter()) // 1);
console.log(counter()) // 2);
