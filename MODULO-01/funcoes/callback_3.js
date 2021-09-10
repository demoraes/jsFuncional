const nums = [1,2,3,4,5]

// const dobro = (n,i,a) => n * 2 + i + a.length
const dobro = n => n * 2
console.log(nums.map(dobro))


const nomes = ['Gabriel','Lucia','Kleber','Natalia']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes,letras)

const carrinho = [
    { nome: 'Caneta', qtde: 0, preco: 7.99},
    { nome: 'Impressora', qtde: 2, preco: 649.50},
    { nome: 'Caderno', qtde:4, preco: 27.10},
    { nome: 'Lapis', qtde:3, preco: 5.82},
    { nome: 'Tesoura', qtde:1, preco: 19.20},
]

// const getNome = carrinho => carrinho.nome
// console.log(carrinho.map(getNome))
// const total = carrinho => carrinho.qtde * carrinho.preco
// console.log(carrinho.map(total))

Array.prototype.meuMap = function(fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}


const getNome = carrinho => carrinho.nome
console.log(carrinho.meuMap(getNome))
const total = carrinho => carrinho.qtde * carrinho.preco
console.log(carrinho.meuMap(total))