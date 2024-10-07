// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let produtos = [
    { nome: 'Televisor', preco: 1000, desconto: 0.1 },
    { nome: 'Ventilador', preco: 250, desconto: 0.1 },
    { nome: 'Computador', preco: 4500, desconto: 0.1 },
    { nome: 'Monitor', preco: 2500, desconto: 0.1 }
]

produtos.forEach(produto => {
    let novoPreco = produto.preco * (1 - produto.desconto)
    console.log(`produto a venda: ${produto.nome}, novo preço de venda (com desconto de 10%) : R$ ${novoPreco.toFixed(2)}`)
})
