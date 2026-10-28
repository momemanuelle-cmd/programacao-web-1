 let paragrafo = document.getElementById('primParag')
 let segparagrafo = document.getElementById('segParag')
let div1 = document.getElementById("div1")

function mudarCorDivIn(){
    div1.style.backgroundColor = "pink"
    paragrafo.textContent = "arruma o tclado"

}
function mudarCorDivOut(){
    div1.style.backgroundColor = "purple"
    paragrafo.textContent = "por favor"

}


function    mudarParag(){
    paragrafo.textContent = "Mensagem Atualizada"
}

function mudarCor(){
    paragrafo.style.color = "red"
    paragrafo.textContent = "curor entrou no botão"
}
function mudarCorSaida(){
    paragrafo.style.color = "green"
    paragrafo.textContent = "curor saiu no botão"
}
