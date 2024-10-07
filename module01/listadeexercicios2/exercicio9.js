// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

let clientes = [
    { nome: 'Michel', idade: 35, cidade: 'Pelotas' },
    { nome: 'Jessica', idade: 31, cidade: 'Pelotas' },
    { nome: 'Nicollas', idade: 13, cidade: 'Pelotas' },
    { nome: 'Sophia', idade: 12, cidade: 'Pelotas' },
    { nome: 'Rafaella', idade: 9, cidade: 'Pelotas' }
]

let contador = 0;

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contador++
    }
})

console.log(`Número de clientes com mais de 30 anos: ${contador}`)
