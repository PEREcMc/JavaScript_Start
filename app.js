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


// Логические операторы   (приоритеты: 1. !НЕ 2. && 3. || )

//   Оператор (||) ИЛИ (первое true или последнее false)

alert(true || true)   // true 
alert(false || true)  // true 
alert(true || false)  // true 
alert(false || false) // false 

// ИЛИ находит первое истинное значение
// и возвращает первое истинное значение или последнее, если такое значение не найдено

let x;
true || (x = 1);
alert(x);        // undefiend, потому что (х = 1) не вычисляется

// Оператор  (&&)  И (первое false или последнее true)

alert(true && true)   // true 
alert(false && true)  // false 
alert(true && false)  // false  
alert(false && false) // false 

// И находит первое ложное значение
// и возвращает первое ложное значение или последнее, если такое значение не найдено

// Оператор (!) НЕ 
// приводит аргумент к логическому типу и затем возвращает ПРОТИВОПОЛОЖНОЕ значение

alert(!0); // true

// НЕ !! - используют для преобразования значений к логическому типу 

alert(!!"string") // true
alert(!!null) // false


let age = prompt('Введите число от 14 до 90 включительно', '')
if (age >= 14 && age <= 90) {
    alert("В диапазоне от 14 до 90")
} else { alert('Число не в диапазоне от 14 до 90')}


// Оператор нулевого слияния (??)  ВОЗВРАЩАЕТ ПЕРВОЕ ОПРЕДЕЛЁННОЕ ЗНАЧЕНИЕ

// Оператор ?? возвращает первый аргумент, если он не null/undefind, иначе - второй.

let user;
alert(user ?? 'Anonim') // Anonim

height = height ?? 100 // присвоение значения по умолчанию


// Цикл while 

while (condition) {
    // код - тело цикла
}

let i = 3
while (i <= 9) {
    alert(i)
    i++
}

// Do...while

let i = 5
do {
    alert(i)
    i++
} while (i < 7);


// Цикл For

for (let index = 0; index < 3; index++) {
    alert(index)
}

// break - прерывание цикла

let sum = 0
while (true) {
    let value = +prompt('Введите число', '')
    if(!value) break
    sum += value
}
alert('Сумма: ' +  sum)

 // Метки

outer: for (let x = 0; x < 99; x++) {
     for (let y = 0; y < 99; y++) {
         let input = prompt(`Значение на координатах: (${x}, ${y})`, '')
         if (!input) break outer
     }
 }
 alert('Готово!')

 for (let i = 2; i <= 10; i++)  {
    if (i % 2 == 0) {
        alert(i)
    }  
 }
 let i = 0
 while (i < 3) {
     alert(`number ${i}`)
     i++
}

// Switsh

switch (key) {
    case value:
        
        break;

    default:
        break;
}


let browser = prompt('Input browser name', '')
if (browser === "Edge") {
    alert('This Edge.')
} else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari") {
    alert('Ok, we support these browser too')
} else { 
    alert('We hope that this page looks ok!')
}

// switch (browser) {
//     case "Edge":
//         alert('This Edge.')
//         break;
//     case "Chrome":
//     case "Firefox":
//     case "Safari":
//         alert('Ok, we support these browser too')
//         break;
//     default:
//         alert('We hope that this page looks ok!')
//         break;
// }

const number = +prompt("Введите число между 0 и 3", '') 
switch (number) {
    case 0:
        alert("Вы ввели число 0")
        break
    case 1:
        alert("Вы ввели число 1")
        break
    case 2:
    case 3:
        alert("Вы ввели число 2, а может и 3")
        break    
}


// Функции

function name(params) {
    // тело функции
}


// Имя функции: глагольный префикс + уточнение
// get Age() - возвращает возраст, showMessage() - показывает сообщение, checkPermission - проверяет доступ.

function checkAge(age) {
   return (age > 18) ? true : confirm('Родители разрешили?')
}
//
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?')
 }
//
 function getMin(a, b) {
       if (a < b) {
           return a
       } else {
           return b
       }
 }
 getMin(4,7)
//
 function pow(x, n) {
    let result = x
    for (let i = 1; i < n; i++) {
        result *= x
    }
    return result
 }

 let x = prompt('Введите число x:', '')
 let n = prompt('Введите число y:', '')

 if (n < 1) {
     alert(`Степень ${n} не поддерживается, используйте натурольное число`)
 } else {
     alert(pow(x, n))
 }