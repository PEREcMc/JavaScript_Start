// const text = 'Здорова, Этот текст будет отображаться наоборот.'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const dogs = ['Mira', 'Nelya', 'Zuchka']

const dogstUpperCase = dogs.map(dog => {
    return dog.toUpperCase()
})
console.log(dogstUpperCase)
//
const numbers = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]

const pow2 = num => num ** 2
const pow2Numbers = numbers.map(pow2)

console.log(pow2Numbers)
//
const filteredNumbers = pow2Numbers.filter(num => num > 100)
console.log(filteredNumbers)
//
const users = [
    {name: 'Ivan', tel: 89508632875, cach: 100000 },
    {name: 'Petr', tel: 89508634875, cach: 67000 },
    {name: 'Fedya', tel: 89548637875, cach: 25500 },
]
const allCach = users
.filter(person => person.cach > 50000)
.reduce(function(acc, person) {
    acc += person.cach
    return acc
}, 0)

console.log(allCach)

const git = [1, 3, 9, 12, 15]

console.log(git[1])