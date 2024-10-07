// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

let pedidos = [
    { cliente: 'Michel', produto: 'Rodas', quantidade: 5 },
    { cliente: 'Jessica', produto: 'Batom', quantidade: 5 },
    { cliente: 'Michel', produto: 'Radio', quantidade: 1 },
    { cliente: 'Jessica', produto: 'Delineador', quantidade: 1 },
    { cliente: 'Rafa', produto: 'Boneca', quantidade: 2 },
]
let totalPorCliente = {}

pedidos.forEach(pedido => {
    let { cliente, quantidade } = pedido
    if (!totalPorCliente[cliente]) {
        totalPorCliente[cliente] = 0
    }
    totalPorCliente[cliente] += quantidade;
})
console.log(totalPorCliente)
