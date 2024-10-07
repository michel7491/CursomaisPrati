// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

let empresa = {
    nome: "Sollato",
    departamentos: [
        {
            nome: "Depósito",
            funcionarios: ["Anderson", "Gabriel"]
        },
        {
            nome: "Financeiro",
            funcionarios: ["Enrico", "Sabrina"]
        },
        {
            nome: "Operacional",
            funcionarios: ["Michel", "Renato"]
        },
        {
            nome:"Gerencia e CEO",
            funcionarios: ["Martin"]
        }
    ]
}
for (let departamento of empresa.departamentos) {
    console.log(`Departamento: ${departamento.nome}`)
    for (let funcionario of departamento.funcionarios) {
        console.log(`Colaborador: ${funcionario}`)
    }
}
