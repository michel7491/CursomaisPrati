// Objetivo : Calcular a média das notas dos alunos de um professor e verificar se está acima da média de aprovação . 
// Use um loop for in para iterar sobre as propriedades de professor. grades.
// Imprima se o professor esta acima da média de aprovação (considerando 6.0 como média).

// let professor = {
//     nome: 'Turma do professor Michel',
//     disciplinaEscolar: 'matemática',
//     notas: {
//         aluno1: 8.0,
//         aluno2: 10.0,
//         aluno3: 4.0,

//     }

// }
// let numerodeAlunos = 0
// let count = 0

// for (let aluno in professor.notas) {
//     numerodeAlunos
//         += professor.notas[aluno]
//     count++
// }
// let mediaDosAlunos = numerodeAlunos / count

//console.log(`A nota média da turma é ${mediaDosAlunos.toFixed(2)}`)
//console.log(mediaDosAlunos >= 6 ?
//      `${professor.nome} está acima da média .`:
//     `${professor.nome} está abaixo da média .`
// )


// Objetivo: Verificar e listar livros publicados antes de 2000 .
// Use um loop for...of para iterar sobre o array biblioteca . 
// Imprima o titulo e o ano dos livros que atendem a essa condição .

// let biblioteca = [
//     { titulo: 'O hobbit', autor: 'J. R. R. Tolkien', anodePublicacao: 1925 },
//     { titulo: 'Harry Potter', autor: 'J. K. Rolling', anodePublicacao: 1999 },
//     { titulo: 'Nárnia', autor: 'C. S. Lewis', anodePublicacao: 2010 }
// ]

// for (let livro of biblioteca) {
//     if (livro.anodePublicacao < 2000) {
//         console.log(`O livro ${livro.titulo}, escrito por ${livro.autor}, foi publicado em ${livro.anodePublicacao} .`)
//     }
// }

// Objetivo : Contar a quantidade de filmes por gênero . 
// Use o método for...each para iterar sobre o array filmes . 
// Para cada filme, verifique se o gênero já existe no objeto de contagem. 
// Se existir, incremente a contagem, se não, adicione o gênero ao objeto com a contagem inicial de 1. 

// let filmes = [
//     {titulo: 'Top Gun', genero: 'Ação'},
//     {titulo: 'Interestelar', genero: 'Ficção Cientifica'},
//     {titulo: 'Senhor dos Anéis', genero: 'Aventura'},
//     {titulo: 'Poderoso Chefão', genero: 'Máfia'},
//     {titulo: 'Vingadores: Ultimato', genero: 'Heróis'},
//     {titulo: 'Deadpool & Wolverine', genero: 'Heróis'}
// ]
// let countGenero = {}

// filmes.forEach(filmes => {
//     if(countGenero[filmes.genero]){
//         countGenero[filmes.genero]++
//     }else {
//         countGenero[filmes.genero]=1
//     }
// })
// for(let genero in countGenero){
//     console.log(`Existem ${countGenero[genero]} filmes do gênero ${genero} .`)
// }
