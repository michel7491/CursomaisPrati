let titulo = document.getElementById('titulo')

titulo.textContent = "Aula de JS basico"

titulo.innerHTML = "Mudei o conteudo do titulo novamente"

titulo.style.color = "red"

let botao = document.getElementById('botao')

botao.addEventListener('click',() => {alert('Você clicou no batão !!') })

let novoparagrafo = document.createElement('p')
novoparagrafo.innerHTML = "este é um paragrafo criado via JS"
document.body.appendChild(novoparagrafo)

let paragrafo = document.querySelector('.paragrafo')
paragrafo.remove()

