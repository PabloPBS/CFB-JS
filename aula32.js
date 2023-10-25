// Utilizar o spread (...) para transformar em Array

const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = [...document.getElementsByClassName('curso')][0]

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)

cursosTodos.map((e) => {
    if (e.innerHTML === 'React') {
        e.classList.add("destaque")
    }
    if (e.classList.contains('c1')) {
        e.classList.add("destaque")
    }
    if (e.classList.contains('c2')) {
        e.innerHTML = 'Elemento com a classe c2'
    }
})

cursoEspecial.setAttribute('id', 'especial')