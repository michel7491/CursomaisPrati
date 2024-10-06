# update
let vetor = [] // declaração de um vetor vazio 

// adicionando elementos ao final do vetor
vetor.push('Maçã')  // vetor agora é (Maçã)
vetor.push('Banana')  // vetor agora é (Maçã , Banana)

console.log(vetor) // Imprimi vetor ('Maçã , Banana')

// Adicionando um elemento ao inicio do vetor 
vetor.unshift('Morango') // vetor agora é ('Morango , Maçã , Banana')

console.log(vetor)  // imprime vetor ('Morango , Maçã , banana')

// remove um elemento ao final do vetor
let ultimoElemento = vetor.pop();  // vetor agora é ('Morango , Maçã')

console.log(ultimoElemento)  // Imprime ('Banana')
console.log(vetor)  // imprime ('Morango , Maçã')

// remove um elemento do inicio do vetor
let primeiroElemento = vetor.shift();

console.log(primeiroElemento)  //imprime ('Morango')
console.log(vetor)  // imprime '(Maçã)'

// acessa um elemento do vetor pelo indice
console.log(vetor[0])  // imprime o elemento da coluna indicada entre colchetes

//modifica um elemento do vetor pelo indice 
vetor[0] = 'Pêssego'; // vetor agora é ('pêssego')
vetor[1] = 'Cacau'; // vetor agora é ('pêssego , Cacau')
vetor.push('Alface') ; // vetor agora é ('pêssego , Cacau , Alface')

console.log(vetor) // imprime o vetor ('Pêssego , Cacau , Alface')
