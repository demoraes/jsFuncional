const fs = require('fs')
const path = require('path')
const { resolve } = require('path/posix')

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch (e) {
            reject(e)
        }
    })
}

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
            resolve(conteudo.toString())
        } catch (e) {
            reject(e)
        }
    })
}

function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementorTerminadosCom(padrao) {
    return function(array) {
        return array.filter(el => el.endsWith(padrao))
    }
}

function removerElementosVazio(array) {
    return array.filter(el => el.trim())
}

function removerElementosSeIncluir(padraoTextual) {
    return function (array) {
        return array.filter(el => !el.includes(padraoTextual))
    }
}

function removerElementosSeApenasNumero(array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

function removerSimbolos(simbolos) {
    return function(array) {
        return array.map(el => {
            let textSemSimbolos = el
            simbolos.forEach(simbolo => {
                textSemSimbolos = textSemSimbolos.split(simbolo).join('')
            })
            return textSemSimbolos
        })
    }
}

function mesclarElementos(array) {
    return array.join(' ')
}

function separarTextoPor(simbolo) {
    return function(texto) {
        return texto.split(simbolo)
    }
}


function agruparElementos(palavras) {
    return Object.values(palavras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase()
        const qtde = acc[el] ? acc[el].qtde + 1 : 1
        acc[el] = { elemento: el, qtde }
        return acc
    }, {}))
}

module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    elementorTerminadosCom,
    removerElementosVazio,
    removerElementosSeIncluir,
    removerElementosSeApenasNumero,
    removerSimbolos,
    separarTextoPor,
    mesclarElementos,
    agruparElementos
}