/*
operadores lógicos

&& -> and lógico 
|| -> or lógico
!  -> not lógico 

*/

// exemplos 

let num1 = 10
let num2 = 15
let num3 = 2

console.log("Condições Simples")

if(num1 >= num2) {
    console.log("Entrou no if")
}else {
    console.log("(falsiane!)não entrou no if")
}

//exemplo composto

console.log("Condições Compostas")

if((num1 >= num2) && (num1 != num3)) {
    console.log("Entrou no if")
}else {
    console.log("(falsiane!)não entrou no if")
}

// exemplo com 3 condições

console.log("Condições Compostas")

if((num1 >= num2) && (num1 != num3) || (num1 != num2)) {
    console.log("Entrou no if")
}else {
    console.log("(falsiane!)não entrou no if")
}

//exemplo condição simples negada

console.log("Condições Simples Negada")

if(!(num1 >= num2)) { //o sinal de exclamação inverte a saída 
    console.log("Entrou no if")
}else {
    console.log("(falsiane!)não entrou no if")
}
