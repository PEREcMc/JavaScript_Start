const person = {
    name: 'Ivan',
    age: 27,
    isProgrammer: true,
    languages: ['ru', 'en'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Computed Key',  // key_4
    // greet: function() {

    // }
    greet() {
        console.log('greet from person')
    },
    info() {
        // console.log('this:', this)
        console.info('Информация про человека по имени:', this.name) // this - ключ. слово, он является внутри функции самим person
    }
}

// console.log(person.name)
// console.log(person['age'])
// console.log(person['complex key'])
// console.log(person)
// person.greet()

// person.age++
// person.languages.push('ua')
// console.log(person)
    // person['key_4'] = undefined
// delete person['key_4']
// console.log(person)

// Деструктуризация

// const name = person.name
// const age = person.age
// const languages = person.languages

const {name, age: personAge = 18, languages} = person // обращаемся к ключю (можно даже задавать значение по умолчанию: 18)

console.log(name, personAge, languages)

// Объекты не иттерируемые, но можно с этим бороться:

for (let key in person) {   // Метод for in опасен тем, что может заходить в prototpe
    if (person.hasOwnProperty(key)) {
        console.log('key', key)
        console.log('value', person[key])
    }
} 
//

//const keys =  Object.keys(person)      // Получаем массив из ключей объекта
Object.keys(person).forEach( (key) => {
    console.log('key', key)
    console.log('value', person[key])
})


//                Context
//   Стрелочные функции не создают собственный контекст
// person.info()

// const logger = {
//     keys(obj) {
//         console.log('object Keys: ', Object.keys(obj))
//     }
// }

// logger.keys(person)

const logger = {
    keys() {
        console.log('object Keys: ', Object.keys(this))
    },

    keysAndValues() {
        // Object.keys(this).forEach(key => {
        //     console.log(`"${key}": ${this[key]}`)
        // })

        //const self = this
        Object.keys(this).forEach(function(key) {  // ключевое слово fuction задаёт свой контекст
            console.log(`"${key}": ${this[key]}`)
        }.bind(this)) // здесь this вне функции и всё будет работать 
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('------ Start ------')
        } 
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('---------------')
            }
        })
        if (bottom) {
            console.log('------ End ------')
        } 
    }
}

const bound = logger.keys.bind(person)   // метод  bind  - привязывает определённый контекст, который мы выбирем. Возвращает новую функцию
bound()

logger.keys.call(person)   //  call - как и bind, только он не возвращает функцию, а сразу её вызывает

logger.keysAndValues.call(person)
logger.keysAndValues.call({a: 2, b: 2})

logger.withParams.call(person, true, true, true)

logger.withParams.apply(person, [true, true, true]) //  aplay - как и call, только он не принимает в себя неограниченное кол. параметров - а только 2. Второй параметр - всегда МАССИВ. 
