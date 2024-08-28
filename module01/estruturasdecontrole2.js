const prompt = require('prompt-sync')()
// 1 - Imprima a sequência de Fibonacci até o 10º termo

// Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)

// Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.

// Função para imprimir os primeiros 10 termos da sequência de Fibonacci


// let n1 = 0
// let n2 = 1
// console.log(n1)
// console.log(n2)
//   for (let i = 1; i <=8; i++) {
//   let n3 = n1+ n2
//   console.log(n3)
//   n1 = n2
//   n2 = n3  
//   }

// 2 - Verifique se um número é primo
// Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo. Imprima "É primo" ou "Não é primo".

// Dica: Um número primo só é divisível por 1 e por ele mesmo.

// let n1 =parseInt(prompt('Digite um numero : ')) 
// let cont = 0
// for ( i = 1 ; i <= n1  ; i++) {
//      if (n1 % i === 0) {
//         cont++
//      } 

// }
// if (cont === 2) {
//     console.log('Esse numero é primo !!!')
// } else {
//     console.log('Esse numero não é primo !!')
// } 

// 3 - Imprima um triângulo de números

// Escreva um programa que use um loop for para imprimir um triângulo de números.

// Dica: Utilize dois loops for, um dentro do outro.


// let triangulo = parseInt(prompt('Digite o numero de linhas :'))

//  for (let i = 1; i <= triangulo ; i++) {
//     let linha = ' ' ;
//     for (let j = 1; j <= i ; j++) {
//         linha += j + ' ';
//     }
//     console.log(linha)
// } 



// 4 - Calcule o fatorial de um número

// Escreva um programa que use um loop while para calcular o fatorial de um número fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120.

// Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.

// let num  = parseInt(prompt('Digite um numero :'))
// let i = 1
// let fat = 1

// while ( num >= i ) {
//    fat = fat * i
//    i++

// } 
//    console.log('O fatorial de', num, 'é', fat,'!!')


// 5 - Inverta os dígitos de um número


// Escreva um programa que use um loop while para inverter os dígitos de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).

// Dica: Use operações de módulo e divisão para extrair os dígitos.

// let num = Number(prompt('digite um numero :'))
// let inv = 0 ;


// while (num > 0) {
//   let dig = num % 10 ;
//   inv = ( inv * 10  ) + dig ; 
//   num = ( num - ( num % 10)) /10 ; 
// } 
// console.log ('sequencia de numeros foi invertida ', inv, '!!')

// 6 - Verifique se um número é palíndromo

// Escreva um programa que use um loop while para verificar se um número fornecido (por exemplo, 121) é um palíndromo. Um número é palíndromo se ele é igual ao seu reverso.

// Exercícios com 'do while'

// let num = Number(prompt('Digite um número para inverter os dígitos: '));
// let numInter = 0;
// let palindromo = num
// while (num > 0) {
//    let digito = num % 10;

//    numInter = (numInter * 10) + digito;

//    num = (num - (num % 10)) / 10;
// }

// if (palindromo == numInter) {
//    console.log("O número é um palíndromo")
// } else {
//    console.log("O número não é um palíndromo")
// }

// 7 - Conte o número de dígitos de um número

// Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).

// Dica: Use operações de divisão para reduzir o número até que ele seja zero.

// let numero = Number(prompt('Digite um número para contar os dígitos: '));
// let digitos = 0;

// do {

//     numero = (numero - (numero % 10)) / 10;
//     digitos++;
// } while (numero > 0);

// console.log('O número de dígitos é:', digitos);


// 8 - Calcule a soma dos dígitos de um número

// Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).

// Dica: Use operações de módulo para extrair os dígitos e depois some-os.

// let n = Number(prompt('Digite um número para calcular a soma dos dígitos: '));
// let sum = 0;

// do {
//     let digito = n % 10;  
//     sum += digito;  
//     n = (n - digito) / 10;  
// } while (n > 0);

// console.log('A soma dos dígitos é:', sum);


// 9 - Imprima um padrão de estrela decrescente

// Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.

// Dica: Utilize dois loops, um dentro do outro.



// let linhas = Number(prompt('Digite o número de linhas para o padrão de estrelas decrescente: '));

// do {
//     let estrelas = '';  
//     let j = 0;
//     while (j < linhas) {
//         estrelas += 'k7';  
//         j++;
//     }
//     console.log(estrelas);
//     linhas--; 
// } while (linhas > 0);


// Encontre o maior divisor comum (MDC) de dois números
// Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).

// Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença dos dois números até que ambos sejam iguais.




// let num1 = Number(prompt('Digite o primeiro número: '));
// let num2 = Number(prompt('Digite o segundo número: '));


// if (num1 <= 0 || num2 <= 0) {
//     console.log('Os números devem ser positivos.');
// } else {
//     let maior, menor;

//     if (num1 > num2) {
//         maior = num1;
//         menor = num2;
//     } else {
//         maior = num2;
//         menor = num1;
//     }

//     do {
//         let diferenca = maior - menor;
//         maior = menor;
//         menor = diferenca;

//         if (menor > maior) {
//             let temp = maior;
//             maior = menor;
//             menor = temp;
//         }
//     } while (menor > 0);

//     console.log('O maior divisor comum é:', maior);
// }
