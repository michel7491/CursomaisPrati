// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

let alunos = [
    {nome: 'Amadeu', nota1: 6.0, nota2: 8.0},
    {nome: 'Faristeu', nota1: 8.5, nota2: 8.0},
    {nome: 'Romeu', nota1: 6.0, nota2: 10.0},
    {nome: 'Jacó', nota1: 4.0, nota2: 6.0}
]

for(let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2 ;
    console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}`)
}
