alert("Bem vindos a aula de Switch Case")
let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))

let escolha = Number(prompt("Digite 1 para soma e 2 para multiplicação"))

console.log(num1, num2, escolha)
switch(escolha) {
    case 1:
        let soma = num1 + num2
        console.log(`Você escolheu soma. O valor da soma é: ${soma}`)  //interpolação
        console.log("Você escolheu soma. O valor da soma é: " + {soma})//concatenação
    case 2:
        let mult = num1 * num2 
        console.log(`Você escolheu multiplicação. O valor da soma é: ${mult}`)
        break
    default:
        console.log("ERRO! Escolha inválida")    
}
