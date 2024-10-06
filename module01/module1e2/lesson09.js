
// let arr = [11, 12, 13, 14]

// 1. Soma dos elementos de um Array

// const numeros = [2, 5, 7, 9, 10];
// let soma = 0;
// for (let i = 0; i < numeros.length; i++) {
//   soma += numeros[i];
// }
// console.log("A soma dos elementos é:", soma);

// soma de numeros

// const numeros = [2, 5, 7, 9, 10];
// let soma = 0;
// for (let i = 0; i < numeros.length; i++) {
//   soma += numeros[i];
// }
// const media = soma / numeros.length;
// console.log("A média dos elementos é:", media);

// A função reduce() permite reduzir todos os elementos do array a um único valor, aplicando uma função de callback em cada elemento.

// Aqui está um exemplo:

// const numeros = [2, 5, 7, 9, 10];
// const soma = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
// console.log("A soma dos elementos é:", soma);

// let sum = 0 
// let arr = [10, 20, 30, 40]

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]

// }

// console.log sum

//Encontre o maior numero de um array
//  let arr = [10, 20, 42, 33]
// let max = arr[0]

// for (let j = 0; j < arr.length; j++) {
//    if (arr[j] > max) {
//      max = arr[j]
//    }

// }
// console.log(max)


// 3 - reverter as posiçoes de um Array

// let reversed = []
// for (let k = arr.length - 1 ;k >= 0 ;k--) {
//     reversed.push(arr[k]);

// }
// console.log(reversed)

// 4 - crie um array só com numeros pares 

// let evens = []

// for (let m = 0; m < arr.length; m++) {
//      if (arr[m]%2 === 0) {
//         evens.push(arr[m])
//     }
// }
// console.log (evens)

// exercicio 5

// let vet = [10, 20, 10, 45, 10]
// let value = Number(prompt('insira um numero :'))
// let count = 0 

// for (let i = 0; i < vet.length; i++) {
//     if (vet[i] === value){
//         count++
//     }

// }
// console.log(`O valor ${value} ocorre ${count} vezes no vetor !!`)



// const matriz = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]]

//   console.table(matriz)

//   for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//       console.table(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
//     }
//   }
// Some dois arrays :

// let arr1 = [[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]
// let arr2 = [[9, 8, 7],
// [6, 5, 4],
// [3, 2, 1]]

// let resultado = []

// if (arr1.length !== arr2.length || arr1[0].length !== arr2[0].length) {
//     throw new Error("Os arrays devem ter o mesmo tamanho !!");
// }

// for (let i = 0; i < arr1.length; i++) {
//     let somaLinha = []
//     for (let j = 0; j < arr1[1].length; j++) {
//         somaLinha.push(arr1[i][j] + arr2[i][j])
//     }
//     resultado.push(somaLinha)
// }
// console.table(resultado)






























