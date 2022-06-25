// 1 Переменные

//var name = 'Ivan E.' // Создавая переменные через var их можно менять
// Но этим способом уже лучше не пользоваться. Предпочтительнее создавать переменные через const

//camelCase - oneTwo
// Можно писать код без точек с запятой (99%)

// const firstName = 'Ivan'
//const lastName = 'Vlasenko' //  тип данных - string
//let age = 27               //  тип данных number
//const isProgrammer = true //  тип данных  boolean

// какие переменные можно/нельзя задавать:
//const _private = 'private'
//const $ = 'some value'

// const if = 'mkef' // err
//const withNum5 = '5'
// const 5withNum = '5' // err

// 2 Мутирование

//console.log('Имя человека: ' + lastName + ', а возраст: ' + age)
//console.log(age.toString())
//alert('Имя человека: ' + lastName + ', а возраст: ' + age) // alert - присутствует в Браузере

// const lastName = prompt('Введите Фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы

// let currentYear = 2022
// const birthYear = 1995 

// const old = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32
//c = c + a
// c += a
// c -=a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных

// const isProgrammer = true
// const name = 'Ivan'
// const age = 27
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null) // typeof - не всегда возвращает конкретный тип данных - баг..

// 5 Приоритет операторов

// const fullAge = 27
// const birthYear = 1995
// const currentYear = 2022

// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6 Условные операторыf

// const courseStatus = 'fail' // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Курс готов')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока в разработке')
// } else {
//     console.log('Курс не успели подготовить =( Сорян.')
// }

// const num1 = 42  // number
// const num2 = '42' // string

// console.log(num1 === num2)  // Лучше использовать тройное РАВНО

// const isReady = true

// if (isReady) {
//     console.log('Всё готово')
// } else {
//     console.log('Всё не готово')
// }

// Тернарное выражение - для простых условий
// isReady ? console.log('Всё готово') :  console.log('Всё не готово') 

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Logical_AND

// 8 Функции

// function calculateAge(year) {
   // return 2022 - year           // return - возвращает что-то из функции
//}

// const myAge = calculateAge(1995)
// console.log(myAge)

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее!')
//     }

// }
// logInfoAbout('Иван', 1995)
// logInfoAbout('Жора', 2023)

// 9 Массивы

// const cars = ['Мазда', 'Мерседес', 'Форд'] // так правильнее
// console.log(cars)

// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars)

// console.log(cars[2])
// console.log(cars.length)

// cars[0] = 'Порше'
// console.log(cars)
// cars[cars.length] = 'Мазда'
// console.log(cars)

// 10 Циклы

// const cars = ['Мазда', 'Мерседес', 'Форд', 'Порше'] 

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты

const person = { 
    firstName: 'Vlasenko',
    lastName: 'Ivan',
    year: 1995,
    languages: ['Ru', 'En'],
    hasWife: true,
    greet: function() {
        console.log('greet')
    }
}

console.log(person.lastName)
console.log(person['firstName'])
const key = 'languages'
console.log(person[key])
person.isProgrammer = true
console.log(person)
person.greet()

// Объекты группируют значения. Можно описывать модели и гибко к ним обращаться