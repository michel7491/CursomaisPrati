// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

let transacoes = [
    { tipo: 'entrada', valor: 200 },
    { tipo: 'saída', valor: 150 },
    { tipo: 'entrada', valor: 250 },
    { tipo: 'saída', valor: 170 },
    { tipo: 'entrada', valor: 150 },
]

let saldoFinal = 0

transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
        saldoFinal += transacao.valor 
    } else if (transacao.tipo === 'saída') {
        saldoFinal -= transacao.valor
    }
})

console.log('Saldo Final:', saldoFinal)
