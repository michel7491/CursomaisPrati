// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let funcionarios = [
    { nome: 'Faristeu', cargo: 'Pintor', salario: 1500 },
    { nome: 'Amadeu', cargo: 'Frentista', salario: 2000 },
    { nome: 'Jacó', cargo: 'Dentista', salario: 3500 },
    { nome: 'Judas', cargo: 'Politico', salario: 6000 },
    { nome: 'Pedro', cargo: 'Vendedor', salario: 2500 }
]

let salarioMinimo = 1400

let Filtrados = []

for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        Filtrados.push(funcionario)
    }
}

console.log('Funcionários com salário maior que ' + salarioMinimo + ':')
for (let funcionario of Filtrados) {
    console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`)
}
