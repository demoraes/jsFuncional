const path = require('path')
const fn = require('./funcoes')
const _ = require('lodash')
const { toArray, map, reduce, groupBy, mergeMap } = require('rxjs/operators')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '_',
    '<i>', '</i>', '\r', '[', ']',
    '(', ')', '♪'
]

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosVazio(),
        fn.removerElementosSeApenasNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerElementosVazio(),
        groupBy(el => el),
        mergeMap(grupo => grupo.pipe(toArray())),
        map(palavras => ({ elemento: palavras[0], qtde: palavras.length })),
        toArray(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
    .subscribe(console.log)