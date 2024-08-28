// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()
function exibirNumero() {

    let numero = Number(prompt("Digite um número inteiro:"))
    numero = Number(numero, 10)
    if (isNaN(numero)) {
        console.log("Por favor, insira um número inteiro válido.")
        return
    }
    for (let i = 0; i < 10; i++) {
        console.log(numero)
    }
}
exibirNumero()
