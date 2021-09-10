function bomdia() {
    console.log('Bom dia !!!!!')
}

const boaTarde = function(){
    console.log('Boa tarde !!!!!!')
}

// 1) passar uma função para outra função
function executaQualquerCoisa(fn){
    console.log(typeof fn)
    if(typeof fn === 'function'){
        fn()
    }
} 

executaQualquerCoisa(3)
executaQualquerCoisa(bomdia)
executaQualquerCoisa(boaTarde)

// 2) Retornar uma função a partir de uma outra função

function potencia(base){
    return function(exp){
        return Math.pow(base,exp)
    }
}

// vc pode passar os parametros das duas formas abaixo, porem é mais semantico a primeira
const potencia8 = potencia(8)
console.log(potencia8(3))

const potenciaa8 = potencia(8)(2)
console.log(potenciaa8)