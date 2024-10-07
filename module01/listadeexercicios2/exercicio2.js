// Verificando Propriedades
// Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let livro = {
titulo: 'As Cronicas de Fogo e Gelo',
autor: 'George R. R. Martin',
anoPulblicacao: '1996',
genero: 'Fantasia',
//editora:'exemplo'
}
let possuiEditora = false
for(let propriedade in livro) {
    if (propriedade === 'editora') {
        possuiEditora = true
        break
    }
}
if(!possuiEditora){
    livro.editora = 'Editora Não informada'
}
console.log(livro)
