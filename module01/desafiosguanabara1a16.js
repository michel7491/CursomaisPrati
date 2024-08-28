const prompt = require('prompt-sync')()

// 1) Escreva um programa que mostre na tela a mensagem "Olá, Mundo!"

//console.log("Hello World !!")

// 2) Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas para ela:


// let name = prompt("Digite seu nome:")
// console.log('Bem vindo ',name ,'!!' )

//3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
//final uma mensagem.


// let name = prompt('digite seu nome :')
// let valor = Number (prompt('qual seu salario :'))
// console.log ('o funcionario', name, 'tem um salario de' , valor,  'em julho !!' )  


//4) Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório
//entre eles.

// let num1 = Number (prompt('digite o primeiro valor:'))
// let num2 = Number (prompt('digite o segundo valor: '))
// console.log (num1 + num2)


//5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
//na tela a sua média na disciplina.

// let nota1 = Number (prompt('primeira nota :'))
// let nota2 = Number (prompt('segunda nota :'))
// let media = Number ((nota1 + nota2) / 2)
// console.log('A média é ', media )


//6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
//sucessor.

// let num = parseInt(prompt('digite um numero:'))
// let ant = num  -1
// let suc = num  +1
// console.log('o antecessor de ',num ,'é' ,ant ,'!!' )
// console.log('o sucessor de ',num ,'é' ,suc ,'!!')

//7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
//sua terça parte.

// let num = Number(prompt('digite um numero : '))
// let dob = num *2
// let ter = num /3
// console.log('o dobro de',num,'é',dobro,'!!')
// console.log('o terço de',num,'é',ter,'!!')

//8) Desenvolva um programa que leia uma distância em metros e mostre os valores
//relativos em outras medidas.

// let num = Number(prompt('Digite a distancia em metros : '))
// let km = num / 1000
// let hm = num / 100
// let dm = num / 10
// let cm = num * 100
// let mm = num * 1000
// console.log('a distancia em m corresponde a ', km, "km !")
// console.log('a distancia em m corresponde a ', hm, "hm !")
// console.log('a distancia em m corresponde a ', dm, "dm !")
// console.log('a distancia em m corresponde a ', cm, "cm !")
// console.log('a distancia em m corresponde a ', mm, "mm !")

//9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
//e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

// let carteira = parseFloat(prompt('qual é o saldo da sua carteira : '))
// let dol = carteira / 3.45 
// console.log('você pode comprar até ',dol.toFixed(2) , 'dollares com seu saldo !!!')

// 10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
// sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

// let alt = Number(prompt('qual é a altura da parede em metros : '))
// let lar = Number(prompt('qual a largura da parede em metros : ')) 
// let area = alt * lar 
// let tinta = area / 2
// console.log('vc precisará para pintar a parede de uma area de ', area.toFixed(2), 'de metros quadrados !')
// console.log('a quantidade de ', tinta, 'litros de tinta !!' )

//11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
//segundo grau e mostre o valor de Delta.

// let a = parseFloat(prompt('digite o valor de A :'))
// let b = parseFloat(prompt('digite o vaklort de B :'))
// let c = parseFloat(prompt('digite o valor de C : '))
// let delta = b**2 - 4 * a * c;
// console.log('o valor de delta é', delta, '!!!')

//12) Crie um programa que leia o preço de um produto, calcule e mostre o seu
//PREÇO PROMOCIONAL, com 5% de desconto.

// let val = Number(prompt('digite o valor do produto: '))
// console.log('valor do produto com desconto é ',(val * 0.95).toFixed(2) ,'!')

// 13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
// seu novo salário, com 15% de aumento.

// let salario = Number(prompt('qual seu salario : '))
// console.log('Com sua promoçao seu salario ficou R$',(salario * 1.15),'reais !!' )

// 14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
// um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
// sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

// let dia = parseFloat(prompt('quantos dias o carro foi alugado :'))
// let km = parseFloat(prompt('quantos km o carro rodou :'))
// let diarias = dia * 90 
// let rod = km * 0.20
// let taxa = diarias + rod 
// console.log('com as diarias R$',diarias , 'e os kms rodados', rod) 
// console.log('Total de debitos em R$', taxa.toFixed(2), '!!')

// 15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
// por hora trabalhada.

// let dia = parseInt(prompt('quantos dias foram tarbalhados esse mes : '))
// console.log('De acordo com a quantidade de dias vc tem R$', (dia * 200), 'reais de salario a receber !!')

// 16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
// fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
// já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
// quantos dias de vida um fumante perderá e exiba o total em dias.

// let anosfumados = parseInt(prompt('A quantos anos vc fuma ?'))
// let cigarrosdia = parseInt(prompt('Quantos cigarros por dia vc fuma ?'))
// let umdiaperdido = (cigarrosdia * 10) / 60 ;
// let anoperdidos = umdiaperdido * 365
// let diasperdidos = anosfumados * anoperdidos ;
// console.log('Total de dias reduzidos é ', (diasperdidos / 24 ).toFixed(2), '!!')
