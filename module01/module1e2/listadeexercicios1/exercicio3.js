const prompt = require('prompt-sync')()

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = parseInt(prompt('Digite a nota do aluno : '))

if ((nota >= 0) && (nota < 3)) {
    console.log('Aluno reprovado !!')
} else if ((nota >= 3) && (nota < 7)) {
    console.log('Aluno em recuperação !!')
} else if ((nota >= 7) && (nota <= 10)) {
    console.log('Aluno aprovado !!')
} else {
    console.log('Nota Invalida !!')
}
