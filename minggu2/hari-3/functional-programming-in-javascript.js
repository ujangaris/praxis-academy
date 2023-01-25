// Functional programing in javascript
console.log('<<< Functional programing in javascript >>>')
let books = [
  { name: 'JavaScript', pages: 450 },
  { name: 'Angular', pages: 902 },
  { name: 'Node', pages: 732 },
]
// Imperative Pattern
for (let i = 0; i < books.length; i++) {
  books[i].lastRead = new Date()
}
// Declarative Pattern
books.map((book) => {
  book.lastReadBy = 'me'
  return book
})
console.log(books)

// Output:
// [ { name: 'JavaScript', pages: 450, lastReadBy: 'me' },
//   { name: 'Angular', pages: 902, lastReadBy: 'me' },
//   { name: 'Node', pages: 732, lastReadBy: 'me' } ]

// Array Functions
console.log('<<< Array Functions >>>')
let meetups = [
  { name: 'JavaScript', isActive: true, members: 700 },
  { name: 'Angular', isActive: true, members: 900 },
  { name: 'Node', isActive: false, members: 600 },
  { name: 'React', isActive: true, members: 500 },
]

// Imperative Pattern
let activeMeetups = []
for (let i = 0; i < meetups.length; i++) {
  let m = meetups[i] //`m adalah variable yang berisi object dari array meetups`
  if (m.isActive) {
    // isActive adalah property dari object m , jika true maka akan di push ke dalam array activeMeetups
    activeMeetups.push(m) // ini akan menambahkan object m ke dalam array activeMeetups
  }
}
console.log(activeMeetups) // [ { name: 'JavaScript', isActive: true, members: 700 }, { name: 'Angular', isActive: true, members: 900 }, { name: 'React', isActive: true, members: 500 } ]

// Declarative Pattern
console.log('<<< Declarative Pattern >>>')
let activeMeetups2 = []
activeMeetups2 = meetups.filter((m) => {
  return m.isActive == false //`m adalah variable yang berisi object dari array meetups`yang akan di filter berdasarkan property isActive bernilai false
})
console.log(activeMeetups2) // [ { name: 'Node', isActive: false, members: 600 } ]

// Function Chaining
console.log('<<< Function Chaining >>>')

let sumChain = meetups
  .filter((m) => {
    return m.isActive
  })
  .map((m) => {
    return m.members - m.members * 0.1
  })
  .reduce((acc, m) => {
    return acc + m
  }, 0)
console.log(sumChain) // 1800

// Side Effects
console.log('<<< Side Effects >>>')

let meeup = { name: 'JavaScript', isActive: true, members: 700 }
const scheduleMeetup = (date, place) => {
  meeup.date = date
  meeup.place = place
  if (meeup.members < 50) {
    meeup.isActive = false
  }
  const publishMeetup = () => {
    if (meeup.isActive) {
      meetups.publish = true
    }
  }
  scheduleMeetup('today', 'my house')
  publishMeetup()
}
console.log(meeup) // { name: 'JavaScript', isActive: true, members: 700, date: 'today', place: 'my house' });
