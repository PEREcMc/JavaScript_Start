//window.confirm('You human?')

// Каждый из тегов HTML - это узел - НОДА (Node)

const heading = document.getElementById('headerH1')
// const h3 = document.getElementsByTagName('h3')[0]
// const h3 = document.getElementsByClassName('git') [0]
// const h3 = document.querySelector('.git')             // CSS селектор - предпочтительнее пользоваться им
const h3 = document.querySelector('h3')                 // querySelector - возвращает всегда 1 элемент

console.dir(h3)

// const h3Next = h3.nextElementSibling
const h3List = document.querySelectorAll('h3')
console.log(h3List)
const h3Next = h3List[h3List.length - 1]
console.log(h3Next)

setTimeout( () => {
    addStylesTo(heading, 'This is JavaScript')
}, 2000)

setTimeout( () => {
    addStylesTo(h3, 'Git-course', 'purple')
}, 3000)

const link = h3Next.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})

setTimeout( () => {
    addStylesTo(link, 'Делай и всё будет!', 'green', '30px')
}, 4000)



function addStylesTo(node, text, color = '#900', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = '#898989'
    node.style.padding = '10px'
    node.style.display = 'block'
    node.style.width = '100%'
    // falsy: '', undefind, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

// События

heading.onclick = () => {
    if (heading.style.color === '#900') {
        heading.style.color = 'green'
        heading.style.backgroundColor = 'white'
    } else {
        heading.style.color = '#900'
        heading.style.backgroundColor = '#898989'
    }
}

h3.addEventListener('dblclick', () => {
    if (h3.style.color === 'purple') {
        h3.style.color = 'green'
        h3.style.backgroundColor = 'white'
    } else {
        h3.style.color = 'purple'
        h3.style.backgroundColor = '#898989'
    }
})

// h3Next.addEventListener('click', () => {
//     if (h3Next.style.color === 'green') {
//         h3Next.style.color = 'yellow'
//         h3Next.style.backgroundColor = 'white'
//         h3Next.style.textTransform = 'uppercase'
//     } else {
//         h3Next.style.color = 'green'
//         h3Next.style.backgroundColor = '#898989'
//         h3Next.style.textTransform = 'none'

//     }
// })