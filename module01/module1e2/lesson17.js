// revisao e chegada de todos os alunos que vieram da turma 1

// Classe que representa um nó na lista duplamente encadeada
class Node {
    constructor(data) {
        this.data = data; // Armazena os dados do nó
        this.next = null; // Ponteiro para o próximo nó
        this.previous = null; // Ponteiro para o nó anterior
    }
}

// Classe que representa a lista duplamente encadeada
class DoublyLinkedList {
    constructor() {
        this.head = null; // Cabeça da lista (primeiro nó)
        this.tail = null; // Cauda da lista (último nó)
        this.size = 0; // Tamanho da lista
    }

    // Método para adicionar um novo nó à lista
    add(data) {
        const newNode = new Node(data); // Cria um novo nó com os dados fornecidos
        if (!this.head) { // Se a lista estiver vazia
            this.head = newNode; // O novo nó se torna a cabeça
            this.tail = newNode; // O novo nó também é a cauda
        } else { // Se a lista já tem nós
            this.tail.next = newNode; // O atual último nó aponta para o novo nó
            newNode.previous = this.tail; // O novo nó aponta para o nó anterior (cauda)
            this.tail = newNode; // Atualiza a cauda para o novo nó
        }
        this.size++; // Incrementa o tamanho da lista
    }

    // Método para remover um nó em um índice específico
    removeAt(index) {
        // Verifica se o índice está fora dos limites da lista
        if (index < 0 || index >= this.size) {
            console.log("Index fora dos limites !! ");
            return; // Sai do método se o índice for inválido
        }

        let current = this.head; // Inicializa a variável `current` para percorrer a lista

        // Caso especial: remoção do primeiro item da lista
        if (index === 0) {
            this.head = this.head.next; // Atualiza a cabeça para o próximo nó
            if (this.head) {
                this.head.previous = null; // A nova cabeça não tem nó anterior
            } else {
                this.tail = null; // Se a lista ficou vazia, a cauda também é nula
            }
        } 
        // Caso especial: remoção do último item da lista
        else if (index === this.size - 1) {
            this.tail = this.tail.previous; // Atualiza a cauda para o nó anterior
            this.tail.next = null; // O novo último nó não deve apontar para nada
        } 
        // Caso geral: remoção de um item do meio da lista
        else {
            // Percorre a lista até o índice desejado
            for (let i = 0; i < index; i++) {
                current = current.next; // Move para o próximo nó
            }
            // Ajusta os ponteiros dos nós adjacentes
            current.previous.next = current.next; // O nó anterior aponta para o próximo
            if (current.next) { // Verifica se o próximo nó existe
                current.next.previous = current.previous; // O próximo nó aponta para o anterior
            }
        }

        this.size--; // Reduz o tamanho da lista após a remoção
    }

    // Método para obter os dados de um nó em um índice específico
    getData(index) {
        // Verifica se o índice está fora dos limites da lista
        if (index < 0 || index >= this.size) {
            console.log("Index fora dos limites!");
            return null; // Retorna null se o índice for inválido
        }
        let current = this.head; // Inicializa a variável `current` para percorrer a lista
        // Percorre a lista até o índice desejado
        for (let i = 0; i < index; i++) {
            current = current.next; // Move para o próximo nó
        }
        return current.data; // Retorna os dados do nó encontrado
    }

    // Método para imprimir os dados da lista
    print() {
        let current = this.head; // Inicializa `current` na cabeça da lista
        let result = []; // Array para armazenar os dados dos nós

        // Percorre a lista até o final
        while (current !== null) {
            result.push(current.data); // Adiciona os dados do nó ao array
            current = current.next; // Move para o próximo nó
        }
        // Exibe os dados da lista formatados
        console.log(result.join(' <=> '));
    }

    // Método para obter o tamanho da lista
    getSize() {
        return this.size; // Retorna o tamanho atual da lista
    }

    // Método para verificar se a lista está vazia
    isEmpty() {
        return this.size === 0; // Retorna true se o tamanho for 0
    }
    clear(){
        this.head = null
        this.tail = null
        this.size = 0
    
        console.log('Lista foi limpa !!')
    }

}

// Exemplo de uso da lista duplamente encadeada
let lista = new DoublyLinkedList(); // Cria uma nova lista

lista.add(10); // Adiciona 10 à lista
lista.add(20); // Adiciona 20 à lista
lista.add(30); // Adiciona 30 à lista
lista.add(40); // Adiciona 40 à lista
lista.add(50); // Adiciona 50 à lista

//lista.print(); // Imprime os dados da lista

//lista.removeAt() // Remove o item na posição 0
//lista.print() // imprime os dados da lista


