/**
 * Uma função pura é uma função em que o valor de retorno
 * é determinado apenas por seus valores de entrada, sem
 * efeitos colaterais observáveis
 */

/** 
 * O Math.random gera um numero aleatorio oque faz dessa função impura, pois os parametros que entram 
 * não determinam a saida 
*/
function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(1, 1000))
console.log(gerarNumeroAleatorio(1, 1000))
console.log(gerarNumeroAleatorio(1, 1000))
