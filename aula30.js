// document.getElementById - Retorna apenas um elemento

const dc1 = document.getElementById('c1')
const dc2 = document.getElementById('c2')

console.log(dc1)
console.log(dc1.id)
console.log(dc1.innerHTML)
dc1.innerHTML = "CFB Cursos"
dc1.style.backgroundColor = 'red'
dc2.style.color = 'blue'
dc2.style.fontSize = '2em'
dc1.innerHTML = '<h1>alo</h1>'
dc1.style.textAlign = 'center'