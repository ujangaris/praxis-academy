/* //The Cat
// Pseudocode
// 1. Create an object that represents a cat
// 2. Create properties for tiredness, hunger, lonliness and happiness
// 3. Create methods that increase and decrease those properties
// 4. Create a method that prints out the cat's status in each area

//code here
//- Ini adalah deklarasi objek kucing yang akan dibuat.
let cat = {
  name: 'Paws', //Ini adalah properti yang menyimpan nama dari kucing.
  tiredness: 0, //Ini adalah properti yang menyimpan nilai kelelahan kucing. Nilainya ditentukan sebagai 0.
  hunger: 0, //Ini adalah properti yang menyimpan nilai lapar kucing. Nilainya ditentukan sebagai 0.
  lonliness: 0, //Ini adalah properti yang menyimpan nilai kesendirian kucing. Nilainya ditentukan sebagai 0.
  happiness: 0, //
  feed(amount = 1) {
    //Ini adalah metode yang akan menambah nilai lapar kucing. Nilainya ditentukan sebagai 1.
    this.hunger -= amount //Nilai lapar kucing akan dikurangi dengan nilai yang ditentukan pada parameter metode.
  },
  sleep(amount = 1) {
    //Ini adalah metode yang akan menambah nilai kelelahan kucing. Nilainya ditentukan sebagai 1.
    this.tiredness -= amount //Nilai kelelahan kucing akan dikurangi dengan nilai yang ditentukan pada parameter metode.
  },
  pet(amount = 1) {
    //Ini adalah metode yang akan menambah nilai kesendirian kucing. Nilainya ditentukan sebagai 1.
    let randomChance = Math.random() //Nilai randomChance akan diisi dengan nilai random dari 0 sampai 1.
    if (randomChance > 0.3) {
      //Jika nilai randomChance lebih besar dari 0.3, maka nilai kesendirian kucing akan dikurangi dengan nilai yang ditentukan pada parameter metode.
      this.lonliness -= amount //Nilai kesendirian kucing akan dikurangi dengan nilai yang ditentukan pada parameter metode.
      this.happiness += amount //Nilai kebahagiaan kucing akan ditambah dengan nilai yang ditentukan pada parameter metode.
    } else {
      console.log(`${this.name} doesn't want to be petted right now.`) //
    }
  },
  play(amount = 1) {
    //Ini adalah metode yang akan menambah nilai kebahagiaan kucing. Nilainya ditentukan sebagai 1.
    this.happiness += amount //Nilai kebahagiaan kucing akan ditambah dengan nilai yang ditentukan pada parameter metode.
  },
  status() {
    //Ini adalah metode yang akan menampilkan status dari kucing.
    console.log(`${this.name}'s current status:`) //Ini adalah teks yang akan ditampilkan pada console.
    console.log(`Tiredness: ${this.tiredness}`) //Ini adalah teks yang akan ditampilkan pada console.
    console.log(`Hunger: ${this.hunger}`) //Ini adalah teks yang akan ditampilkan pada console.
    console.log(`Loneliness: ${this.lonliness}`) //Ini adalah teks yang akan ditampilkan pada console.
    console.log(`Happiness: ${this.happiness}`) //Ini adalah teks yang akan ditampilkan pada console.
  },
}

cat.feed(3) //Ini adalah pemanggilan metode feed dengan nilai 3.
cat.sleep(2) //Ini adalah pemanggilan metode sleep dengan nilai 2.
cat.pet(1) //Ini adalah pemanggilan metode pet dengan nilai 1.
cat.play(5) //Ini adalah pemanggilan metode play dengan nilai 5.
cat.status() //Ini adalah pemanggilan metode status.

/* 
Paws's current status:
Tiredness: -2
Hunger: -3
Loneliness: -1
Happiness: 6 
*/

let cat = {
  name: 'Whiskers', // properti untuk menyimpan nama kucing
  tiredness: 5, // properti untuk menyimpan level kelelahan kucing
  hunger: 5, // properti untuk menyimpan level lapar kucing
  lonliness: 5, // properti untuk menyimpan level kesepian kucing
  happiness: 5, // properti untuk menyimpan level kebahagiaan kucing
  feed() {
    if (this.hunger < 10) {
      // jika nilai lapar kurang dari 10
      this.hunger++ // lapar kucing ditambah 1
      console.log(
        `${this.name} has been fed, hunger level is now ${this.hunger}.`
      )
    } else {
      console.log(`${this.name} is not hungry.`)
    }
  },
  sleep() {
    if (this.tiredness < 10) {
      // jika nilai kelelahan kurang dari 10
      this.tiredness++ // kelelahan kucing ditambah 1
      console.log(
        `${this.name} has taken a nap, tiredness level is now ${this.tiredness}.`
      )
    } else {
      console.log(`${this.name} is not tired.`)
    }
  },
  pet() {
    if (this.lonliness > 0) {
      // jika nilai kesepian lebih dari 0
      this.lonliness-- // kesepian kucing dikurangi 1
      this.happiness++ // kebahagiaan kucing ditambah 1
      console.log(
        `${this.name} has been petted, lonliness level is now ${this.lonliness} and happiness level is now ${this.happiness}.`
      )
    } else {
      console.log(`${this.name} doesn't feel lonely.`)
    }
  },
  play() {
    if (this.happiness < 10) {
      // jika nilai kebahagiaan kurang dari 10
      this.happiness++ // kebahagiaan kucing ditambah 1
      console.log(
        `${this.name} has played, happiness level is now ${this.happiness}.`
      )
    } else {
      console.log(`${this.name} is already very happy.`)
    }
  },
  status() {
    console.log(`${this.name}'s current status:`)
    console.log(`Tiredness: ${this.tiredness}`)
    console.log(`Hunger: ${this.hunger}`)
    console.log(`Loneliness: ${this.lonliness}`)
    console.log(`Happiness: ${this.happiness}`)
  },
}

cat.feed() // kucing makan
cat.sleep() // kucing tidur
cat.pet() // kucing dipegang
cat.play() // kucing bermain
cat.status() // status kucing
