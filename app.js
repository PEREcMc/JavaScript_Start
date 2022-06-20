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

// const git = [1, 3, 9, 12, 15]
// console.log(git[1])
// git.length = 0
// console.log(git)


// Объект в JS - это ассоциативный массив, т.е. структура данных,
// в которых можно хранить любые данные в формате: имя(ключ) - значение
// Объект имеет свойства и их значения. 


// Метод - это свойство объекта, являющееся функцией.

// Метод  reduce()  - используется для последов. обработки данных массива (свёртка массива)

// let nums = [10, 20, 30, 40, 50]
// let sum = nums.reduce(function(result, num){
//     console.log(result)
//     return result + num
// }, 0)

const sum = [12, 56, 1, 4, 1, 5, 6, 8, 9, 43, 3, 9].reduce(function(a, b) {
    return a + b;
})
console.log(sum)

// Метод  filter()  - используется для фильтрации массива через функцию. 
// Он создаёт новый массив в который войдут только те элементы массива, для которых вызов функции возвратит значение - true.

// ГЛАВНАЯ РАЗНИЦА между forEach() и filter() втом, что forEach() просто пускает цикл по массиву и выполняет callback,
// в то время как filter() выполняет callback и проверяет возвращаемое значение. Если значение - true, то оно пойдёт в новый массив,
// если - false, то оно будет исключено из массива.

let arr = [1, -1, 2, -2, 3, -4, 7]
let positiveArr = arr.filter(function(number) {
    return number > 0
})
console.log(positiveArr)

// Метод  map() - создаёт новый массив с результатом вызова указанной функции 
// для каждого элемента массива.

let arr1 = [1, 4, 7, 9, 15]
let doubles = arr1.map(function(number) {
    return number * 2
})
console.log(doubles)

// Метод  forEach()  - выполняет указанную функцию один раз для каждого элемента в массиве

let arr2 = [1, 4, 7, 9, 15]
let doublesPerebor = arr2.forEach(function(number) {
    console.log(number * 2)
})

// Методы:   every/some  -  используются для проверки массива.
// every - возвращает true, если вызов callback вернёт true для КАЖДОГО элемента массива.
// some - возвращает true, если вызов callback вернёт true для КАКОГО-НИБУДЬ элемента массива.

let arr3 = [1, -4, 7, -9]
function isPositive(num) {
    return num > 0    
}    
console.log(arr3.every(isPositive))
console.log(arr3.some(isPositive))


