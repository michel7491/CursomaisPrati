// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')()

function calcularMedia(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return numeros.length > 0 ? soma / numeros.length : 0
}

let numeros = []

while (true) {

    let input = prompt('Digite um número decimal (ou 0 para finalizar):')

    let numero = parseFloat(input)

    if (isNaN(numero)) {
        console.log('Por favor, digite um número válido.')
        continue;
    }

    if (numero === 0) {
        break
    }

    numeros.push(numero)
}

let media = calcularMedia(numeros)

console.log(`A média aritmética dos números digitados é: ${media} !!`)
