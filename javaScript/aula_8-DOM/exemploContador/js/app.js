let valorElemento = document.getElementById("valor")
let btMais = document.getElementById("mais")
let btMenos = document.getElementById("menos")

let contador = 0

btMais.addEventListener('click', ()=>{
    contador++
    valorElemento.textContent = contador
})
btMenos.addEventListener('click', ()=>{
    contador--
    valorElemento.textContent = contador
})
