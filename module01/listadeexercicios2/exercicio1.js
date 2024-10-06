// 1 Acessando Propriedades de Objetos
// Crie um objeto carro com propriedades como "marca, modelo,
// ano e cor" . Use for in para iterar sobre as propriedades e exibir seus
// vaslores no console : 

let carro = {
    marca: 'peugeout',
    modelo: '206',
    ano: '2006',
    cor: 'preta'
}
for (let veiculo in carro){
    console.log(`${veiculo}: ${carro[veiculo]}`)
}
