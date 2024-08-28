const prompt = require('prompt-sync')()
// exercicio 1 : verificar se o exercicio é positivo ou negativo ?
// let num1 = Number(prompt('Digite um numero: '))    // solicita um numero ao ususario. 

// if (num1 > 0 ) {                                     // verifica se é maior que zero.
//     console.log('O número informado é positivo !')   // imprime positivo se o numero é maior que zero. 
// } else if (num1 < 0) {                               // verifica se é menor que zero.
//     console.log('O número informado é negativo ! ')  // imprime negativo se o numero for menor que zero. 
// } else if (num1 === 0 ) {                            // verifica se é zero.
//     console.log('O número é zero !')                 // imprime que o numero é zero.
// } else {
//     console.log('Erro , digite um numero valido ! ') // imprime uma mensagem de erro se o usuario digite algum caractere diferrente de um numero.
// }

// exercicio 2 : verifique se o ano fornecido é bixesto 

// const year = Number(prompt('Informe um ano :'))                  // solicita um ano ao usuário
// if ((year % 4 ===0 && year % 100 !== 0) || (year % 400 === 0)) { // 
//     console.log ('O ano é bissexto !!')
// }else {
//     console.log ('O ano não é bissexto !!')
// }

// exercicio 3: 

// let num1 = Number(prompt('Informe o primeiro valor :'))
// let num2 = Number(prompt('Informe o segundo valor :'))
// let a = num1
// let b = num2

// do {

// let temp = b
//     b = a % b
//     a = temp
// } while (b !== 0)

//     const MDC = a 

//     console.log('O maior divisor comum é', MDC , '!!')

// exercicios de 50 primos acima de 100

// let count = 0
// let num = 100
// do {
//     let primo = 0
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             primo++
//         }
//     }

//     if (primo === 2){
//         console.log(num)
//         count++
//     }

//     num++
// } while (count < 50)


let carros = Array()

carros[0] = 'Civic'
carros[1] = 10
carros[2] = true
carros['hyago'] = '10'

carros.splice(2, 0 ,'nasur')
console.log(carros)
