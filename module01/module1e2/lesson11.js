const prompt = require('prompt-sync')()
// let teste = function() {
//     console.log("Ola Mundo !")
// }
// teste()


// function showFunction(successCallback, errorCallback){
//     if (false) {
//         successCallback("Requisição bem sucedida !")
//     } else {
//         errorCallback("Erro na requisição")
//     }
// }

// let successCallback = function(message) {
//     console.log(message)
// }
// let errorCallback = function(message) {
//     console.log(message)
// }

// showFunction(successCallback,errorCallback)



// inverter uma String

// Solicita ao usuário que digite uma string para ser invertida e armazena o valor na variável 'user'
let user = prompt("digite a string a ser invertida : ")

// Define uma função chamada 'inverterString' que recebe uma string como parâmetro

function inverterString(str) {

    // A função 'inverterString' realiza as seguintes operações:
    // 1. 'str.split('')' divide a string em um array de caracteres
    // 2. 'reverse()' inverte a ordem dos caracteres no array
    // 3. 'join('')' une os caracteres do array novamente em uma string

    return str.split('').reverse().join('')
}

// A variável 'stringOriginal' armazena o valor da string fornecida pelo usuário

const stringOriginal = user;


// A variável 'stringInversa' armazena o resultado da função 'inverterString' aplicada à 'stringOriginal'

const stringInversa = inverterString(stringOriginal)

// Exibe a string invertida no console

console.log(stringInversa)

// contar vogais

function contarVogais(str) {
    // Definimos um conjunto de vogais para verificar
    const vogais = 'aeiouAEIOU'
    // Inicializamos um contador para as vogais
    let contador = 0
    
    // Convertendo a string para um array de caracteres
    for (let i = 0; i < str.length; i++) {
        // Verifica se o caractere atual é uma vogal
        if (vogais.includes(str[i])) {
            contador++
        }
    }
    
    // Retorna o número total de vogais encontradas
    return contador
}

// Exemplo de uso:
const texto = prompt("Digite uma string para contar as vogais: ")
const totalVogais = contarVogais(texto)
console.log(`Número de vogais: ${totalVogais}`)

// gerar numero aleatorio
// dias entre duas Datas
// formatar data