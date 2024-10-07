// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

let pessoas = [
    {nome:'Michel', idade: 35, cidade: 'Pelotas'},
    {nome:'Jessica', idade: 31, cidade: 'Pelotas'},
    {nome:'Nicollas', idade: 13, cidade: 'Pelotas'},
    {nome:'Sophia', idade: 12, cidade: 'Pelotas'}
]

for (let pessoa of pessoas){
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
}
