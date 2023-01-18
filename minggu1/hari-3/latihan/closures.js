// Closure pada JavaScript. Closure adalah sebuah mekanisme di JavaScript yang memungkinkan function untuk mengingat dan mengakses lingkungan (environment) di mana ia didefinisikan.
function sum(a) {
  return function (b) {
    return a + b
  }
}

console.log(sum(1)(2)) // 3
console.log(sum(5)(-1)) // 4
