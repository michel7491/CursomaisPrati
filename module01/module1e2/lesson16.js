const prompt = require('prompt-sync')()

// Função para ler dois valores e imprimi-los em ordem crescente

function ordenar() {
    
// Usando prompt para ler os valores fornecidos pelo usuário


    let valor1 = Number(prompt("Digite o primeiro valor:"));
    let valor2 = Number(prompt("Digite o segundo valor:"));

// Verifica se os valores são diferentes

    if (valor1 === valor2) {
        console.log("Os valores devem ser diferentes.");
        return;
    }

// Ordena os valores e os imprime em ordem crescente

    if (valor1 < valor2) {
        console.log(`Ordem crescente: ${valor1}, ${valor2}`);
    } else {
        console.log(`Ordem crescente: ${valor2}, ${valor1}`);
    }
}

// Chama a função para executar o algoritmo
ordenar();
