const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(err,conteudo){
    console.log(conteudo.toString())
}

// Exemplo de leitura de um arquivo de forma assincrona
console.log('Inicio...')
fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')

console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')
