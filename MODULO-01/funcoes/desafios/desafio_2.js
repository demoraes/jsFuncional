const carrinho = [
    { nome: 'Caneta', qtde: 1, preco: 7.99, fragil: true},
    { nome: 'Impressora', qtde: 2, preco: 649.50, fragil: true},
    { nome: 'Caderno', qtde:4, preco: 27.10, fragil: false},
    { nome: 'Lapis', qtde:3, preco: 5.82, fragil: false},
    { nome: 'Tesoura', qtde:3, preco: 19, fragil: true},
]

// 1. fragil: true
// 2. qtde * preco => total
// 3. media total

const getFragil = item => item.fragil === true
const qtde = item => item.qtde * item.preco
const media = (acc, el) => {
   const novaQtde = acc.qtde + 1
   const novoTotal = acc.total + el
   console.log(acc, el)
   return {
       qtde: novaQtde,
       total: novoTotal,
       media: novoTotal / novaQtde
   }
}

console.log(
carrinho
    .filter(getFragil)
    .map(qtde)
    .reduce(media, {qtde: 0, total: 0, media: 0})
)
