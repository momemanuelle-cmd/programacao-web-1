let nome = prompt("digite o nome do aluno:");

let nota1 = parseFloat(prompt("digite a primeira nota:"));
let nota2 = parseFloat(prompt("digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

if (media >= 6.0) {
    alert("parabens, "+ nome + "! você foi aprovado com media" + media.toFixed(1));
} else {
    alert ("que pena, "+ nome + "! você foi reprovado com media" + media.toFixed(1));
}