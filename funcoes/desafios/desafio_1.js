// Desafio 01 criar a função somar(3)(7)(5)

function somar(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

const somaA = somar(2)
const somaB = somaA(3)
const somaC = somaB(4)

console.log(somaC)

// Desafio 02 criar a função calcular(3)(7)(fn)

function calcular(a){
    return function(b){
        return function(fn){
            return fn(a,b)
        }
    }
}

function subtrair(a,b){
    return a - b
}

function multiplicar(a,b){
    return a * b
}

console.log(calcular(15)(5)(multiplicar))  