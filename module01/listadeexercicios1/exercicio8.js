// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()


function ordenar() {


    let valor1 = Number(prompt("Digite o primeiro valor:"))
    let valor2 = Number(prompt("Digite o segundo valor:"))
    if (valor1 === valor2) {
        console.log("Os valores devem ser diferentes.")
        return;
    }
    if (valor1 < valor2) {
        console.log(`Ordem crescente: ${valor1}, ${valor2}`)
    } else {
        console.log(`Ordem crescente: ${valor2}, ${valor1}`)
    }
}
ordenar()
