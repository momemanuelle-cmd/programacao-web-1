/*
A diferença do while e Do while

1 - While
    verifica a condição antes de entrar no loop
    tem um contador e varialvel de escape do loop

2- Do while 
    primeiro executa o loop, depois testa 
    usado quando se precisa executar o loop pelo menos uma vez
    escapa do loop apenas se a variavel atender a condição 
*/

//while
/*
let num1 = 0
while(num1 <= 5 ) {
    console.log(`${(num1 + 1)}° rodada `)
    num1++
}
*/
//exemplo 2 tabuada
/*
let num1 = 0
let numfixo = 2
while(num1 <= 10 ) {
    console.log(`${(numfixo)} X ${num1} = ${(numfixo * num1)}\n`)
    num1++
}
*/
//correção tabuada com prompt

let num1 = 0
let numfixo = prompt("Digite qual tabuada deseja")
while(num1 <= 10 ) {
    console.log(`${(numfixo)} X ${num1} = ${(numfixo * num1)}\n`)
    num1++
}
