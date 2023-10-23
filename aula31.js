// document.getElementByTagName - Retorna uma coleção HTML

const colecaoHTML = [...document.getElementsByTagName('div')]

console.log(colecaoHTML)

colecaoHTML.map((e) => {
    console.log(e)
})