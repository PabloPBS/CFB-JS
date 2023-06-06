let n1 = 20

//Descolar os bits do elemento - esquerda << / direita >>
let res = n1 >> 2

console.log(res)

/*
    << - dobra o valor
    10 - 1010
    re - 10100 (20)
    25 - 11001
    re - 110010 (50)

    >> -reduz o valor pela metade
    30 - 11110
    re - 1111 (15)
*/

/*
    &  - retorna 1 onde 1 = 1
    10 - 1010
    11 - 1011
    re - 1010

    |  - retorna 1 se ele existir
    10 - 1010
    11 - 1011
    re - 1011

    ^  - retorna 1 onde tiver apenas um 1
    13 - 1101
    11 - 1110
    re - 0011
*/