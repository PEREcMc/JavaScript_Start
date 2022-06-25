// Strings
// const name = 'Ванёк'
// const age = 27
// function getAge() {
//     return age
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 20 ? 'A': 'B'} лет.`
// console.log(output)

// const output = `
//     <div>Yhis is div</div>
//     <p>This is p</p>
// `

// console.log(output);

const firstName = 'Ванёк'
console.log(firstName.length)
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
console.log(firstName.charAt(2))     // н - 2 индекс
console.log(firstName.indexOf('ёк'))  // 3 индекс 
console.log(firstName.indexOf('б'))  // -1
console.log(firstName.startsWith('Ван')) 
console.log(firstName.endsWith('ёк')) 
console.log(firstName.repeat(3))

const string = '    password      '
console.log(string)
console.log(string.trim())
console.log(string.trimLeft())
console.log(string.trimRight())   // очистка пробелов


function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Ещё не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Ванёк'
const personAge = '27'
const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`

console.log(output)

const personName2 = 'Челик'
const personAge2 = '-1'
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output2)