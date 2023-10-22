// this. representa o parâmetro que foi passado na função atual

function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota

    this.dados_anonimo = function() {
        setTimeout(function() {
            console.log(this.nome) //this.nome & this.nota não existem dentro da função dados_anonimo
            console.log(this.nota)
        }, 2000)
    }

    this.dados_arrow = function() {
        setTimeout(() => {
            console.log(this.nome) //A arroy function consegue usar os parâmetros do pai (function aluno)
            console.log(this.nota)
        }, 2000)
    }
}

const al1 = new aluno("Bruno", 100)
al1.dados_anonimo()
al1.dados_arrow()