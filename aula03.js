"use strict"

let nome = "Bruno"
nome = "CBF Cursos"
nome = 10

//const - Variável que não varia/não muda
const curso = "JavaScript"

console.log(curso)

curso = "HTML"

/* 
let = apenas pode ser acessada do seu escopo para baixo, e não pode ser acessada por fora.
var = declarada em todo o escopo da função/globalmente

function teste() {
    if (true) {
        let nome = "Bruno"
        console.log(`Dentro do IF do teste: ${nome}`)
    }
    console.log(`Dentro de teste: ${nome}`)
}

teste()

console.log(`Fora de teste: ${nome}`)*/