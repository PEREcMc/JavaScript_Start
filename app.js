 const text = 'Здорова, Этот текст будет отображаться наоборот.'
 const reverseText = text.split('').reverse().join('')
 console.log(reverseText)
//
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
//
const users = [
    {name: 'Ivan', tel: 89508632875, cach: 100000 },
    {name: 'Petr', tel: 89508634875, cach: 67000 },
    {name: 'Fedya', tel: 89548637875, cach: 25500 },
]
const allname = users
.filter(person => person.name.includes('I'))
.reduce(function(acc, person) {
    acc = person.name.toLowerCase()
    return acc
}, 0)

console.log(allname)
//
let answer = []
questions = ['Ваше имя?', 'Ваша профессия?', 'Сколько вам лет?', 'Где вы живэте?']
for (let i = 0; i < questions.lenght; i++) {
    answer[i] = prompt(questions[i])
}
document.write(answer)

// Полиндром - задача

//let str = "Retro";
let str = "Оголи жопу пожилого";
const polindrom = str => {
    str = str.toLowerCase().replace(/ /g, '')
    return str === str.split('').reverse().join('')
}
console.log(polindrom(str))

// FizzBuzz - задача

const fizzBuzz = num => {
    for (let i = 1; i <= num; i++) {
        // chek if the number is a multiple of 3 and 5
       if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz")
        } // chek if the number is a multiple of 3 
        else if (i % 3 === 0) {
            console.log("fizz")
        } // chek if the number is a multiple of 5
        else if (i % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }
}
console.log(fizzBuzz(50))


// Анаграма - задача (вернуться к ней позднее)


// Поиск гласных - задача
//гласными являются: 'a', 'e', 'i', 'o', 'u'

const findVowels = str => {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            count++
        }
    }
    return count 
}
console.log(findVowels('The London of ...'))

// другой способ

// const findVowels = str => {
//     const matched = str.match(/[aeiou]/gi)
//     return matched ? matched.lenght : 0
// }
// console.log(findVolwes('the pipetsc'))  ?????


// Последовательность Фибоначи - задача

const fibonacci = num => {
    const result = [0, 1]
    for (let i = 2; i <= num; i++) {
        const prevNum1 = result[i - 1]
        const prevNum2 = result[i - 2]
        result.push(prevNum1 + prevNum2)
    }
    return result[num]
}
console.log(fibonacci(3))




