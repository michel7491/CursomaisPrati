const prompt = require('prompt-sync')()

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra 

let numDeMaca = parseInt(prompt('Digite o numero de maças compradas :'))
let precoDaMaca 
if (numDeMaca < 12) {
    precoDaMaca = 0.30
} else {
    precoDaMaca = 0.25
}
let valorTotal = numDeMaca * precoDaMaca
console.log(`O valor total das maçãs deu R$ ${valorTotal} reais !!`)
