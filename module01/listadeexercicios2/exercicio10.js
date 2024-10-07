// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

let vendas = [
    { produto: 'Porta', quantidade: 5, valor: 250 },
    { produto: 'Janela', quantidade: 12, valor: 200 },
    { produto: 'Portão', quantidade: 6, valor: 2500 },
    { produto: 'Telha', quantidade: 50, valor: 85 },
]

let valorTotal = 0

vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor
})

console.log(`Valor total de vendas: R$ ${valorTotal.toFixed(2)}`)
