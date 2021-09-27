const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '_',
    '<i>', '</i>', '\r', '[', ']',
    '(', ')', '♪'
]

fn.composicao(
    fn.lerDiretorio,
    fn.elementorTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerElementosVazio,
    fn.removerElementosSeIncluir('-->'),
    fn.removerElementosSeApenasNumero,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerElementosVazio,
    fn.agruparElementos,
    fn.ordenarPorAtribNumerico('qtde', 'desc'),
    console.log
)(caminho)
