const prompt = require('prompt-sync')()
// Reforçando - Estruturas de controle: condicionais

// 1 - Verifique se um número é positivo, negativo ou zero

// let num1 = Number(prompt('Digite um numero ? '))
// if(num1 > 0) {
//     console.log('O numero é positivo !!')
// }
// if(num1 < 0) {
//     console.log('O numero é negativo !!')
// }
// if(num1 === 0 ) {
//     console.log('O numero é o zero !!')
// }
// if(isNaN(num1)) {
//     console.log('digite um numero valido !!')
// }

// 2 - Verifique se um ano é bissexto

// let anoBisexto = Number(prompt('Digite um ano : '))
//  if (((anoBisexto%4===0) && (anoBisexto%100!==0)) || (anoBisexto%400===0)){
//     console.log('O ano é bissexto !!!') 
//  }
//  if (!(((anoBisexto%4===0) && (anoBisexto%100!==0)) || (anoBisexto%400===0))){
//     console.log('O ano não é bissexto !!!') 
//  }

// 3 - Calcule a média de três números e determine o conceito

// Escreva um programa que leia três notas de um aluno, calcule a média e use uma estrutura if/else para determinar o conceito (A, B, C, D, E, F) baseado na média. Imprima o conceito.

// Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.

// let notaA = Number(prompt('Valor da nota A :'))
// let notaB = Number(prompt('Valor da nota B :'))
// let notaC = Number(prompt('Valor da nota C :'))
// let media = (notaA + notaB + notaC) / 3
// if (media === 10) {
//     console.log('Aluno recebeu nota A !!')
// } else if ((10 > media) && (media >= 8.5)) {
//     console.log('Aluno recebeu nota B !!')
// } else if ((8.5 > media) && (media >= 7)) {
//     console.log('Aluno recebeu nota C !!')
// } else if ((7 > media) && (media >= 5.5)) {
//     console.log('Aluno recebeu nota D !!')
// } else if ((5.5 > media) && (media >= 3)) {
//     console.log('Aluno recebeu nota E !!')
// } else if ((3 > media) && (media >= 0)) {
//     console.log('Aluno recebeu nota F !!')
// } else {
//     console.log('Nota invalida !! ')
// }
// console.log(`A média do aluno é ${media.toFixed(2)} !!`)

// 4 - Verifique se um número é par ou ímpar

// Escreva um programa que leia um número e use uma estrutura  if/else para verificar se o número é par ou ímpar. Imprima uma mensagem apropriada.

// let num = Number(prompt('Digite um numero :'))
// if ((num%2)===0) {
//     console.log('O numero é par !!')
// } else {
//     console.log('O numero é impar !!')
// }


// 5 - Verifique a categoria de um nadador

// Escreva um programa que leia a idade de um nadador e use uma estrutura if/else para determinar a categoria do nadador de acordo com a idade:
//             Infantil A: 5 - 7 anos
//             Infantil B: 8 - 10 anos
//             Juvenil A: 11 - 13 anos
//             Juvenil B: 14 - 17 anos
//             Adulto: 18 anos ou mais

// let idade = Number(prompt('Qual sua idade ? '))
// if ((idade > 5) && (idade <= 7)) {
//     console.log('Categoria Infantil A !!')
// } else if ((idade > 7) && (idade <= 10)) {
//     console.log('Categoria Infantil B')
// } else if ((idade > 10) && (idade <= 13)) {
//     console.log('Categoria Juvenil A  !!')
// } else if ((idade > 13) && (idade <= 17)) {
//     console.log('categoria Juvenil B !!')
// } else if (idade > 17) {
//     console.log(' Categoria Adulto !!')
// } else {
//     console.log('Idade Fora de Todas Categorias !!')
// }

// Exercícios com switch

// 6 - Verifique o dia da semana
// Escreva um programa que leia um número de 1 a 7 e use uma estrutura switch para imprimir o dia da semana correspondente. (1 =
// Domingo, 2 = Segunda-feira, etc.)

// let dia = parseInt(prompt(' Selecione um dia , 1 = Domingo, 2 = Segunda-feira, etc. :'))
//   switch (dia) {
//     case 1 :
//         console.log('Domingo !!')
//         break;
//     case 2 :
//         console.log('Segunda-Feira !!')
//         break;
//     case 3 :
//         console.log('Terça-Feira !!')
//         break;
//     case 4 :
//         console.log('Quarta-Feira !!')
//         break;
//     case 5 :
//         console.log('Quinta-Feira !!')
//         break;
//     case 6 :
//         console.log('Sexta-Feira !!')
//         break;
//     case 7 :
//         console.log('Sábado !!')
//         break;
//     default:
//         console.log('Resposta Invalida !!')
//         break;
//  }


// 7 - Calcule o valor de uma expressão matemática simples

// Escreva um programa que leia dois números e um operador (+, -, *, /) e use uma estrutura switch para calcular o resultado da operação.
// Imprima o resultado.

// Dica: Utilize os operadores aritméticos em cada caso do switch.

// let num1 = Number(prompt('Digite um numero : '))
// let valor = prompt('Selecione a operação desejada (+,-,*,/) : ')
// let num2 = Number(prompt('Digite outro numero para fazer o cálculo : '))
// switch (valor) {
//     case '+':
//         console.log(num1 + num2)
//         break;
//     case '-':
//         console.log(num1 - num2)
//         break;
//     case '*':
//         console.log(num1 * num2)
//         break;
//     case '/':
//         console.log(num1 / num2)
//         break;
//     default:
//         console.log('Operador ou Numero invalido !!')
//         break;
// }

// 8 - Verifique a estação do ano

// Escreva um programa que leia um número de 1 a 4 e use uma estrutura switch para imprimir a estação do ano correspondente. (1 =
// Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)

// let estacao = parseInt(prompt('Digite o numero referente a estação (1 =Primavera, 2 = Verão, 3 = Outono, 4 = Inverno) : '))
// switch (estacao) {
//     case 1:
//         console.log('Primavera')
//         break;
//     case 2:
//         console.log('Verão')
//         break;
//     case 3:
//         console.log('Outono')
//         break;
//     case 4:
//         console.log('Inverno')
//         break;
//     default:
//         console.log('Numero referente a estação inválido !!')
//         break;
// }


// 9 - Verifique a faixa etária de uma pessoa
// Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
//             Criança: 0 - 12 anos
//             Adolescente: 13 - 17 anos
//             Adulto: 18 - 59 anos
//             Idoso: 60 anos ou mais

// Dica: Utilize uma estrutura switch além bloco if/else para imprimir uma mensagem específica para cada faixa etária.


// let idade = parseInt(prompt('Digite a sua idade :'))
// let faixaEtaria
// if ((idade>=0) && (idade <=12)) {
//     faixaEtaria = 1
//     } else if ((idade>13) && (idade <=17)) {
//     faixaEtaria = 2
//     }else if ((idade>17) && (idade <=59)) {
//     faixaEtaria = 3
//     }else if (idade >= 60 )  {
//     faixaEtaria = 4
//     }else {
//         console.log('Idade Invalida !!')
//         return;
//     }

// switch (faixaEtaria) {
//     case 1 :
//         console.log('Faixa etaria infantil !!')
//         break;
//     case 2 :
//         console.log('Faixa etaria juvenil !!')
//         break;
//     case 3 :
//         console.log('Faixa etaria adulto !!')
//         break;
//     case 4 :
//         console.log('Faixa etaria dos idosos !!')
//         break;
//     default:
//         console.log('Faixa etaria invalida')
//         break;
// }


// 10 - Calcule o IMC e determine a categoria

// Escreva um programa que leia o peso (kg) e a altura (m) de uma pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
// if/else para determinar a categoria:
//             Abaixo do peso: IMC < 18.5
//             Peso normal: IMC 18.5 - 24.9
//             Sobrepeso: IMC 25 - 29.9
//             Obesidade grau I: IMC 30 - 34.9
//             Obesidade grau II: IMC 35 - 39.9
//             Obesidade grau III: IMC >= 40
// Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).


// let peso = Number(prompt('Digite seu peso em kg :'))
// let altura = Number(prompt('Digite sua altura em metros :'))
// let imc = ((peso / (altura ** 2)).toFixed(2))
// let imcFinal 

// if (imc < 18.5) {
//     imcFinal = 1;
// } else if ((imc >= 18.5) && (imc < 24.9)) {
//     imcFinal = 2;
// } else if ((imc >= 25) && (imc < 29.9)) {
//     imcFinal = 3;
// } else if ((imc >= 30) && (imc < 34.5)) {
//     imcFinal = 4;
// } else if ((imc >= 35) && (imc < 39.9)) {
//     imcFinal = 5;
// } else  { 
//     imcFinal = 6;
// }

// switch (imcFinal) {
//     case 1:
//         console.log('Você está abaixo do peso !!')
//         break;
//     case 2:
//         console.log('Você está no peso ideal !!')
//         break;
//     case 3:
//         console.log('Você está com sobrepeso !!')
//         break;
//     case 4:
//         console.log('Você está com obesidade de grau 1 !!')
//         break;
//     case 5:
//         console.log('Você está com obesidade de grau 2 !!')
//         break;
//     case 6:
//         console.log('Você está com obesidade de grau 3 !!')
//         break;
//     default:
//         console.log('Informações Invalidas !!')
//         break;
// }


// console.log('Imc igual a',imc,'!!')
