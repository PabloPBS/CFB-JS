/* Funções Geradoras - 'function*' - Na primeira vez, retorna um iterador
    Retorno chamado de 'yield'
*/

function* contador() { //Toda vez que é chamada, retornará o valor +1
    let i = 0
    while(true) {
        yield i++
        if (i > 5) {
            break
        }
    }
}

const itc = contador()
for (let c of itc) { //Loop infinito, se não tivesse o break na função
    console.log(c)
}

/*
    function* perguntas() {
        const nome = yield 'Qual seu nome?'
        const esporte = yield 'Qual seu esporte favorito?'

        return `Seu nome é ${nome}, seu esporte favorito é ${esporte}.`
    }

    const itc = perguntas() // Ativa a função
    console.log(itc.next().value) // Segunda chamada - Retorna o primeiro yield - "Qual seu nome?"
    console.log(itc.next('Pablo').value) // Terceira chamada - Retorna o próximo yield ("Qual seu esporte favorito") e atribui o valor Pablo ao último yield chamado (nome)
    console.log(itc.next('Ciclismo').value) // Quarta chamada retorna o 'return' da função ("Seu nome é...") e atribui 'ciclismo' ao último yield chamado (esporte)

    function* cores() {
        yield 'Vermelho'
        yield 'Verde'
        yield 'Azul'
}

let itc = cores() //Primeira execução - retorna o iterator

    console.log(itc)
    console.log(itc.next().value)
    console.log(itc.next().value)
    console.log(itc.next().value)
    console.log(itc.next().value)

    console.log(itc.next().value) //Segunda execução - retorna o primeiro yield -> 'Vermelho'
    console.log(itc.next().value) //Terceira execução - retorna o próximo yield -> 'Verde'
    console.log(itc.next().value) //Quarta execução - retorna o próximo yield -> 'Azul'
    console.log(itc.next().value) //Quinta execução - não existe o que retornar
*/