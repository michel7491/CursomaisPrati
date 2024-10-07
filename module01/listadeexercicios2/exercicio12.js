// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let estoque = [
    { produto: 'Produto A', quantidade: 6, minimo: 10 },
    { produto: 'Produto B', quantidade: 12, minimo: 8 },
    { produto: 'Produto C', quantidade: 4, minimo: 5 },
    { produto: 'Produto D', quantidade: 8, minimo: 10 }
]

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2
    }
})
console.table(estoque)
