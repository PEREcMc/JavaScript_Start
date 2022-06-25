// Event Loop  Ассинхронность

// setTimeout
const timeout =  setTimeout( () =>  {
    clearTimeout(timeout)
    console.log('After timeout')    // After timeout
}, 2500)

// clearTimeout(timeout)    // нет результата

// setInterval
const interval =  setInterval( () =>  {
    console.log('After timeout')   
}, 1000)

// clearInterval(interval)


const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}

delay( () => {
    console.log('After 2 seconds')
}, 2000)


const delay = (wait = 1000) => {   
    const promise = new Promise( (resolve, reject) => {   // Можем обернуть ассинхронный код в Promise
        setTimeout( () => {
            resolve()  //  метод resolve - когда всё хорошо
        }, wait)
    })       
    return promise                             
}

delay(2500)
// У promise есть такие методы (каждый принимает callback) как:
    .then( () => {
        console.log('After 2 seconds')
    })
    .catch(err => console.error(err))
    .finally( () => console.log('Finally'))

/* -------------------------------------------- */

const delay = (wait = 1000) => {   
    const promise = new Promise( (resolve, reject) => {   // Можем обернуть ассинхронный код в Promise
        setTimeout( () => {
            reject('Что-то пошло не так. Повторите попытку.')  //  метод reject - когда всё плохо
        }, wait)
    })       
    return promise                             
}
    
delay(2500)
    // У promise есть такие методы (каждый принимает callback) как:
    .then( () => {
        console.log('After 2 seconds')
    })
    .catch(err => console.error('Error:', err))
    .finally( () => console.log('Finally'))

/* -------------------------------------------- */

const delay = (wait = 1000) => {   
    const promise = new Promise( (resolve, reject) => {   
        setTimeout( () => {
            resolve()  
        }, wait)
    })       
    return promise                             
}

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

// getData().then(data => console.log(data))

async function asyncExample() {
    await delay(3000)
    const data =  await getData()
    console.log('Data:', data)
}

asyncExample()

/* -------------------------------------------- */

const delay = (wait = 1000) => {   
    const promise = new Promise( (resolve, reject) => {   
        setTimeout( () => {
            reject('Ошибка мать её. 404')  
        }, wait)
    })       
    return promise                             
}

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

// getData().then(data => console.log(data))

async function asyncExample() {
    try {
        await delay(3000)
        const data =  await getData()
        console.log('Data:', data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Finally')
    }
}

asyncExample()