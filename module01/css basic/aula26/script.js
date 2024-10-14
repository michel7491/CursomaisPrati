let resultado = document.getElementById('resultado');

function adicionar(valor) {
    resultado.value += valor;
}

function calcular() {
    try {
        resultado.value = eval(resultado.value);
    } catch (error) {
        resultado.value = 'Erro';
    }
}

function limpar() {
    resultado.value = '';
}
