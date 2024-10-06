// Aula 12 - Introdução aos Objetos

// let serie = {
//     nome: "The Boys",
//     genero: "Ação, Paródia, Heróis",
//     nrTemporadas: 4,
//     status: "em lançamento",
//     classificacao: 18,
//     aindaemlancamento: true,
//     nrEpisodios: {
//         temp1: 10,
//         temp2: 10,
//         temp3: 50
//     },
//     mostrarCaracteristicas: function() {
//         return ` O nome da serie é ${this.nome} e sua classificção é ${this.classificacao}`
//     }
// }
// console.table(serie)
// console.log(serie.mostrarCaracteristicas())

let livro = {
    titulo: "Os Doro",
    autor: "Michel Costa",
    nrCapitulos: 5,
    epoca: "medieval",
    nrPaginas: 355,
    classificacao: 18,
    editora: "Pedrada"
}
let carro = {
    modelo: "206",
    marca: "peugeout",
    ano: "2006",
    estadoConservacao: "Ótimo"
}

for (let propriedade in livro) {
    if (livro.hasOwnProperty(propriedade)) { // Verifica se a propriedade pertence ao objeto e não à cadeia de protótipos
        //console.log(propriedade + ": " + livro[propriedade])
    }
}

let teste = Object.entries(carro) // Transforma o objeto em um array de pares [chave, valor]

for (let [key, value] of teste) {
    //console.log(`${key}: ${value}`)
}
