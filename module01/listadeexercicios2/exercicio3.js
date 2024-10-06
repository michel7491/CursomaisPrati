// 3 Filtrando Propriedades de Objetos
// Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades. 

function filtrarPropriedades(produto, valor) {
    let resultado = {}
    for (let chave in produto) {
      if (produto[chave] > valor) {
        resultado[chave] = produto[chave]
      }
    }
    return resultado
  }
  let produto = {
    preço: 1000,
    peso: 15,
    estoque: 100,
    avaliação: 9.5
  }
  let valor = 1
  let produtoFiltrado = filtrarPropriedades(produto, valor)
  console.log(produtoFiltrado)
