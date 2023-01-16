// const myHeading = document.querySelector('h1')
// myHeading.textContent = 'Hello world!'

// type data
//String
let myVariable = 'Bob'
myVariable = 'Steve'
console.log(myVariable)

// Number
let myNumber = 10
console.log(myNumber)

// Boolean
let myBoolean = true
console.log(myBoolean)

// Array
let myArray = [1, 'Bob', 'Steve', 10]
console.log(myArray)

// Object
let myObject = {
  name: 'Bob',
  age: 30,
  isMarried: false,
}

console.log(myObject)
//   Coments
//   Single line comments
/*
 * semua yang ada diantara tanda bintang dan slash akan dianggap sebagai komentar
 */

// Operator

// Assign the value 5 to x
let x = 5
// Add 2 to y
let y = 2
// Add x and y, and assign the result to z
let z = x + y

console.log(z) //7

// Conditional
let iceCream = 'chocolate'
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!')
} else {
  alert('Awwww, but chocolate is my favorite...')
}

console.log(iceCream)

// Functions
function multiply(num1, num2) {
  let result = num1 * num2
  return result
}

console.log(multiply(4, 7)) //28
console.log(multiply(20, 20)) //400
console.log(multiply(0.5, 3)) //1.5

// Event
// cara satu
/* document.querySelector('html').addEventListener('click', function () {
  alert('Ouch! Stop poking me!')
}) */

// cara dua
document.querySelector('html').addEventListener('click', () => {
  alert('Ouch! Stop poking me!')
})

// Adding an image changer
let myImage = document.querySelector('img')

myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/firefox2.png')
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png')
  }
}
//Adding a personalized welcome message
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

// function setUserName() {
//   const myName = prompt('Please enter your name.')
//   localStorage.setItem('name', myName)
//   myHeading.textContent = `Mozilla is cool, ${myName}`
//   if (!localStorage.getItem('name')) {
//     setUserName()
//   } else {
//     const storedName = localStorage.getItem('name')
//     myHeading.textContent = `Mozilla is cool, ${storedName}`
//   }
// }

myButton.onclick = () => {
  setUserName()
}

// A user name of null?
function setUserName() {
  const myName = prompt('Please enter your name.')
  if (!myName) {
    setUserName()
  } else {
    localStorage.setItem('name', myName)
    myHeading.textContent = `Mozilla is cool, ${myName}`
  }
}
