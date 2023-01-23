/* 
Exercises
Create an object called shape that has the type property and a getType() method.

Define a Triangle() constructor function whose prototype is shape. Objects created with Triangle() should have three own properties—a, b, and c, representing the lengths of the sides of a triangle.

Add a new method to the prototype called getPerimeter().

Test your implementation with the following code:

> var t = new Triangle(1, 2, 3);
> t.constructor === Triangle;
       
true
> shape.isPrototypeOf(t);
        true
> t.getPerimeter();
       6
> t.getType();
       
"triangle"

*/

// Membuat objek shape yang memiliki property type dan method getType()
let shape = {
  type: '', // property type yang diinisialisasi dengan string kosong
  getType: function () {
    // method getType() yang akan mengembalikan nilai dari property type
    return this.type
  },
}

// Membuat constructor function Triangle yang menerima parameter a, b, dan c sebagai panjang sisi dari sebuah segitiga
function Triangle(a, b, c) {
  this.a = a // menyimpan nilai a ke dalam property a
  this.b = b // menyimpan nilai b ke dalam property b
  this.c = c // menyimpan nilai c ke dalam property c
  this.type = 'segitiga' // menyimpan string "segitiga" ke dalam property type
}

// Mengeset prototype dari constructor function Triangle ke objek shape
Triangle.prototype = shape
// mengembalikan nilai constructor ke Triangle
Triangle.prototype.constructor = Triangle

// Menambahkan method getPerimeter() ke dalam prototype Triangle
Triangle.prototype.getPerimeter = function () {
  // mengembalikan hasil penjumlahan dari property a, b, dan c
  return this.a + this.b + this.c
}

// Membuat objek triangle dengan menggunakan constructor function Triangle
let triangle = new Triangle(1, 2, 3)
console.log(shape.isPrototypeOf(triangle)) // true);
console.log(triangle.getPerimeter()) // 6
console.log(triangle.getType()) // "segitiga"
