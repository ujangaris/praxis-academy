console.log('<<== argument & parameter ==>>')

const param1 = true
const param2 = false

function twoParams(param1, param2) {
  console.log(param1, param2)
}
twoParams(param1, param2)

console.log('<<== memanggil function dengan parameter==>>')

function logIt(name) {
  console.log(name)
}
logIt('Joe') //

console.log('<<== memanggil function dengan tanpa parameter==>>')

function logIt2() {
  console.log('Hello World')
}
logIt2() //Hello World

console.log('<<== Function Return==>>')
function test() {
  return true
}
test() //true

let double = function (num) {
  return num * 2
}

let test2 = double(3)

console.log(test2) //6
