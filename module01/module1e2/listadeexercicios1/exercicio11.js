// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')()
function calcularSoma() {
    let soma = 0
    for (let i = 1; i <= 5; i++) {
      let entrada = Number(prompt(`Digite o ${i}º número:`))
      let numero = Number(entrada)
      if (isNaN(numero)) {
        console.log("Entrada inválida. Por favor, insira um número válido.")
        return
      }
      soma += numero
    }
    console.log(`A soma total dos números é: ${soma}`)
  }
  calcularSoma()
