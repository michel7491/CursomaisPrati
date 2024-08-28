const prompt = require('prompt-sync')()

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

console.log('--------------------------------------------')
console.log('DIGITE O TAMANHO DE CADA LADO DO TRIANGULO :')
console.log('--------------------------------------------')


let a = Number(prompt('Tamanho de a :'))
let b = Number(prompt('Tamanho de b :'))
let c = Number(prompt('Tamanho de c :'))

if ((a < (b + c)) && (b < (a + c)) && (c < (a + b))) {
    if ((a === b) && (b === c)) {
        console.log('Triângulo equilatero !')
    } else if (a !== b && a !== c && b !== c) {
        console.log('Triângulo escaleno !')
    } else {
        console.log('Triângulo isósceles !')
    }
} else {
    console.log('ERRO , MEDIDAS FORNECIDAS NÃO FORMAM UM TRIÂNGULO !!')
}    
