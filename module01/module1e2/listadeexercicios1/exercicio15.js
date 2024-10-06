// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

const prompt = require('prompt-sync')()

let n1 = 0
let n2 = 1
console.log(n1)
console.log(n2)
  for (let i = 1; i <=8; i++) {
  let n3 = n1+ n2
  console.log(n3)
  n1 = n2
  n2 = n3  
  }
  