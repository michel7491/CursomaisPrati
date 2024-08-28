const prompt = require('prompt-sync')()

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

let num = Number(prompt('Digite um numero :'))
if ((num%2)===0) {
    console.log('O numero é par !!')
} else {
    console.log('O numero é impar !!')
}
