const prompt = require('prompt-sync')()

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.


//             Abaixo do peso: IMC < 18.5
//             Peso normal: IMC 18.5 - 24.9
//             Sobrepeso: IMC 25 - 29.9
//             Obesidade grau I: IMC 30 - 34.9
//             Obesidade grau II: IMC 35 - 39.9
//             Obesidade grau III: IMC >= 40
//  O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).


let peso = Number(prompt('Digite seu peso em kg :'))
let altura = Number(prompt('Digite sua altura em metros :'))
let imc = ((peso / (altura ** 2)).toFixed(2))
let imcFinal 

if (imc < 18.5) {
    imcFinal = 1;
} else if ((imc >= 18.5) && (imc < 24.9)) {
    imcFinal = 2;
} else if ((imc >= 25) && (imc < 29.9)) {
    imcFinal = 3;
} else if ((imc >= 30) && (imc < 34.5)) {
    imcFinal = 4;
} else if ((imc >= 35) && (imc < 39.9)) {
    imcFinal = 5;
} else  { 
    imcFinal = 6;
}
console.log('Imc igual a',imc,'!!')

switch (imcFinal) {
    case 1:
        console.log('Você está abaixo do peso !!')
        break;
    case 2:
        console.log('Você está no peso ideal !!')
        break;
    case 3:
        console.log('Você está com sobrepeso !!')
        break;
    case 4:
        console.log('Você está com obesidade de grau 1 !!')
        break;
    case 5:
        console.log('Você está com obesidade de grau 2 !!')
        break;
    case 6:
        console.log('Você está com obesidade de grau 3 !!')
        break;
    default:
        console.log('Informações Invalidas !!')
        break;
}
