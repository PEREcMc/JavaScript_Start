// Функции


// greet2('Лена')

// Function Expresion      (здесь будет ошибка в консоли - функция определен после вызова)

// const greet2 = function greet2(name) {
//     console.log('Привет2 - ', name)
// }

// greet('Лена')

// Function Declaration  (можем обращаться к функции когда захотим - ошибки не будет в отличии от Expresion)

// function greet(name) {               
//     console.log('Привет - ', name)
// }

function greet(name) {               
         console.log('Привет - ', name)
    }

console.log(typeof greet)

console.dir(greet) // Функции - являются объектами

// Анонимные функции

let counter = 0
const interval = setInterval(function() {  // Метод setInterval в который можем передать функцию
    if (counter === 5) {
        clearInterval(interval)            // Можем очистить (ОСТАНОВИТЬ) интервал
    } else {
        console.log(++counter)            // здесь вывод функции без имени
    }
}, 1000)


// Стрелочные функции

function greet(name) {               
        console.log('Привет - ', name)
    }

const arrow = (name) => {
    console.log('Привет - ', name)
}

const arrow2 = name => console.log('Привет - ', name) // один параметр и вся функции из одной строки - можно упростить

arrow2('Ivan')


// const pow2 = num => {
//     return num ** 2
// }

const pow2 = num => num ** 2 // можно сократить
console.log(pow2(5))


// Параметры по умолчанию

const sum = (a = 40, b = a * 2) => a + b   // задаём параметра по умолчанию
console.log(sum(41, 4))
console.log(sum())  // 41 + undefind = NaN


//function sumAll(...all) {  // оператор Рест - ...  принимает неограниченное кол. значени
    //let result = 0
    //for (let num of all) {
      //  result += num
    //}
    //return result
//}

const res = cumAll(1, 2, 3, 4, 5) // all - массив
console,log(res)


// Замыкания  - когда из одной функции возвращаем другую и сохраняется какой-то контекст


function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Ivan')   // logWithLastName  - постоянно паботает с name
console.log(logWithLastName('Vlasenko')) 







