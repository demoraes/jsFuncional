const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '_',
    '<i>', '</i>', '\r', '[', ']',
    '(', ')', '♪'
]

function agruparPalavras(palavras) {
    return palavras.reduce((agrupamento, palavra) => {
        const p = palavra.toLowerCase()
        if(agrupamento[p]) {
            agrupamento[p] += 1
        } else {
            agrupamento[p] = 1
        }
        return agrupamento
    },{})
}

fn.lerDiretorio(caminho)
    .then(fn.elementorTerminadosCom('.srt'))
    .then(fn.lerArquivos)
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerElementosVazio)
    .then(fn.removerElementosSeIncluir('-->'))
    .then(fn.removerElementosSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor(' ')) 
    .then(fn.removerElementosVazio)
    .then(agruparPalavras)
    .then(console.log)