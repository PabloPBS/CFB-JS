function soma(...valores) {
    let soma = 0
    for (let i in valores) {
        soma += valores[i]
    }
    return soma
}

console.log(soma(1, 5))