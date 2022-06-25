// Числа

const num = 9 // integer
const float = 9.56 // float
const pow = 10e3

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log('Math.pow 53', Math.pow(2, 53)-1)
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log(Number.NaN) // Not a Number
console.log(typeof NaN)

const weird = 2 / undefined
console.log(isNaN(weird))
console.log(Number.isNaN(9))
console.log(Number.isFinite(50))

const stringInt = '42'
const stringFloat = '42.42'
console.log(Number.parseInt(stringInt) + 2) // Чаще всего используют
console.log(Number(stringInt) + 2)
console.log(+stringInt + 2)

console.log(parseFloat(stringFloat) + 2)
console.log(+stringFloat + 2)


console.log(0.4 + 0.2) //0.6
console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// BigInt -  новый тип данных, который больше, чем MAX_SAFE_INTEGER

console.log(typeof 9007199254740991998888439n) 
console.log(9007199254740991998888439n - 90071992547409919988884n) 
console.log(-9007199254740991998888439n) 
// console.log(9007199254740991998888439.454n) // err

// console.log(10n - 4) // err

console.log(parseInt(10n) - 4)
console.log(5n / 2n)  // 2n

// Math

console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25))
console.log(Math.pow(3, 3))
console.log(Math.abs(-42))
console.log(Math.max(42, 4, 56, 543))
console.log(Math.min(42, 4, 56, 543))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.9))
console.log(Math.round(4.9))
console.log(Math.trunc(4.9))
console.log(Math.random()*10)
console.log(Math.sin(1))

// Example

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomBetween(10, 42))


