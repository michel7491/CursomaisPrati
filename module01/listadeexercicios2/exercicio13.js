// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

let carrinho = {
    itens: [
        { nome: 'Produto X', quantidade: 5, precoUnitario: 10.00 },
        { nome: 'Produto Y', quantidade: 10, precoUnitario: 20.00 },
        { nome: 'Produto Z', quantidade: 20, precoUnitario: 15.00 }
    ],

    calcularTotal: function() {
        let total = 0
        this.itens.forEach(item => {
            total += item.quantidade * item.precoUnitario
        })
        return total
    }
}
let totalCarrinho = carrinho.calcularTotal()
console.log(`O valor total do carrinho é: R$ ${totalCarrinho.toFixed(2)}`)
