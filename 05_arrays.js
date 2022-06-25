const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13, 21]   // числа Фибоначи - в массиве могут быть различные данные

const people = [
    {name: 'Ivan', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victiria', budget: 1700}
]

//Function
function addItemToEnd() {

}

// Method      Если функция вызывается в контексте объекта, то - это называют методом
cars.push('Порше')    // + элемент в конец массива
// console.log(cars)
cars.unshift('Рено')   // + элемент в начало массива
//console.log(cars)

const firstCar = cars.shift()   // удаляет 1-ый элемент из массива и хранит его
const lastCar = cars.pop()     //  удаляет последний элемент из массива и хранит его
//console.log(firstCar)
//console.log(lastCar)
//console.log(cars)

//console.log(cars.reverse())  // возвращает массив и мутирует - элементы в обратном порядке
//console.log(cars)

// Задача 1

// const text = 'Привет, мы тут изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')   
// console.log(reverseText)
//  split - делит строчку и возвращает нам массив
// join - метод, соединяющий массив в строчку через какой-то символ


 const index = cars.indexOf('БМВ')  // indexOf - возвращает (ищет) индекс искомого элемента (c примитивными элементами)
// cars[index] = 'Porsche'
// console.log(cars)


// findIndex - для поиска элемента уже в объектах:
// 1)
const index2 = people.findIndex(function(person) {
    return person.budget === 3500
})
console.log(people[index2])

// 2)
const person = people.find(function(person) {   // можно в некоторых случая сразу найти человека, а не через индекс
    return person.budget === 3500
})
console.log(person)

// 3)
const person = people.find( (person)=> {
    return person.budget === 3500
})
console.log(person)

// Можно ещё упростить:
// const person = people.find(person => person.budget === 3500)
// console.log(person)

// 4)
let findedPerson
for (const person of people) {
    if (person.budget === 3500) {
        findedPerson = person
    }
}
console.log(findedPerson)

// включает ли массив данный элемент:
console.log(cars.includes('Мазда'))

// методы высокого порядка:

// Метод map - преобразовывает данные
const upperCaseCars = cars.map(car => { //метод map принимает в себя функцию и всегда возвращает новый массив
    return car.toUpperCase()             // делаем верхний регистр у элементов
})
console.log(upperCaseCars)


//const pow2Fib = fib.map(num => num ** 2)  // возводим каждый элемент масива в квадрат

const pow2 = num => num ** 2  // создаём функциию, чтобы передать в выражения - для упрощения чтения
const pow2Fib = fib.map(pow2) // функция pow2 - не вызывается, а просто передаэтся
console.log(pow2Fib)

const sqrt = num => Math.sqrt(num)  // из нового массива - берём каждый элемент и извлекаем корень
const pow2Fib = fib.map(pow2).map(sqrt)
// const pow2Fib = fib.map(pow2).map(Math.sqrt) // 
console.log(pow2Fib)

// Метод filter
const filteredNumbers = pow2Fib.filter(num => num > 20) // метод фильтр - также возвращает новый массив
console.log(filteredNumbers)

// Метод reduce - объединяет все значения массива в одно значение

const people = [
    {name: 'Ivan', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victiria', budget: 1700}
]

const allBudget = people
.filter(person => person.budget > 2000)
.reduce(function(acc, person) { // 0 - начальное значение, асс - аккумулятор (переобновляемое значение на каждой итерации)
    acc += person.budget
    return acc
}, 0)

console.log(allBudget)

const displayItems = allItems.filter(item => item.name.contains('phone')) // contains -  метод в строке, который спрашивает: есть ли данная подстрока в строке



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
