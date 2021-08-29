const carrinho = [
    { nome: 'Caneta', qtde: 0, preco: 7.99},
    { nome: 'Impressora', qtde: 2, preco: 649.50},
    { nome: 'Caderno', qtde:4, preco: 27.10},
    { nome: 'Lapis', qtde:3, preco: 5.82},
    { nome: 'Tesoura', qtde:1, preco: 19.20},
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => {
    console.log(acc, el)
    return acc + el
}

const totalGeral = carrinho.map(getTotal).reduce(somar, 0)
console.log(totalGeral)