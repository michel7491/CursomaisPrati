// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')()

// Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.

let num  = parseInt(prompt('Digite um numero :'))
let i = 1
let fat = 1

while ( num >= i ) {
   fat = fat * i
   i++

 } 
   console.log('O fatorial de', num, 'é', fat,'!!')