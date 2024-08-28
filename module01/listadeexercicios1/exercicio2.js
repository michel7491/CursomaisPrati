const prompt = require('prompt-sync')()

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

//             Criança: 0 - 12 anos
//             Adolescente: 13 - 17 anos
//             Adulto: 18 - 59 anos
//             Idoso: 60 anos ou mais

let idade = parseInt(prompt('Digite a sua idade :'))
let faixaEtaria
if ((idade>=0) && (idade <=12)) {
    faixaEtaria = 1
    } else if ((idade>13) && (idade <=17)) {
    faixaEtaria = 2
    }else if ((idade>17) && (idade <=59)) {
    faixaEtaria = 3
    }else if (idade >= 60 )  {
    faixaEtaria = 4
    }else {
        console.log('Idade Invalida !!')
        return;
    }

switch (faixaEtaria) {
    case 1 :
        console.log('Faixa etaria infantil !!')
        break;
    case 2 :
        console.log('Faixa etaria juvenil !!')
        break;
    case 3 :
        console.log('Faixa etaria adulto !!')
        break;
    case 4 :
        console.log('Faixa etaria dos idosos !!')
        break;
    default:
        console.log('Faixa etaria invalida')
        break;
}
