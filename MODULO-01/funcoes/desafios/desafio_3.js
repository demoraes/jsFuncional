const fs = require('fs')
const path = require('path')


const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(caminho){
    return new Promise(resolve=> {
        fs.readFile(caminho, function(_,conteudo){
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

exibirConteudo(caminho)
    .then(linhas => linhas.split('\n'))
    .then(conteudo => `O valor final é ${conteudo}`)
    .then(console.log)
