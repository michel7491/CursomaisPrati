// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a10) utilizando um loop for.

const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um número entre 1 e 10:"))
numero = Number(numero)
if (numero >= 1 && numero <= 10) {
    console.log(`Tabuada do ${numero}:`)
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
} else {
    console.log("Número fora do intervalo permitido. Por favor, forneça um número entre 1 e 10.")
}
