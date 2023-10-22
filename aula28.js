// Serve para percorrer arrays
// .map((elemento da coleção, índice do elemento) => {arrow function })
// Pode receber o elemento, a posição, e o próprio array em que ele vai iterar

const converterInt = (e) => parseInt(e)
const dobrar = (e) => e*2
let num = ['1', '2', '3', '4', '5'].map(dobrar) // Pegou o elemento iterado e realizou a função

console.log(num)

// const el = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML)

// console.log(val)

// let el = document.getElementsByTagName('div')
// el = [...el]

// el.map((e, i) => {
//     e.innerHTML = 'CFB Cursos'
// })

//console.log(el)

// const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']

// let c = cursos.map((el, i) => {
//     return `<div>${el}</div>`
// }) 

// console.log(c)

/*
    const valores = [1, 2, 3, 4, 5]

    let valoresDobrados = valores.map((el, i) => {
        return el * 2
    })

    console.log(valoresDobrados)
*/