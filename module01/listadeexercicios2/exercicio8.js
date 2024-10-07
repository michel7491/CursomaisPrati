// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

let filmes = [
    { titulo: "Ponyo", diretor: "Hayao Miyazaki", anoLancamento: 2010 },
    { titulo: "Spirited Away", diretor: "Hayao Miyazaki", anoLancamento: 2003 },
    { titulo: "Dragon Ball: A lenda de Shenlong", diretor: "Daisuke Nishio", anoLancamento: 1986 },
    { titulo: "Akira", diretor: "Katsuhiro Otomo", anoLancamento: 1991 }
]
let titulos = []
filmes.forEach(filme => {
    titulos.push(filme.titulo)
})

console.log(titulos)
