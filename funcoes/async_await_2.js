function gerarNumerosEntre(min,max,numerosProibidos) {
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve,reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
        resolve(aleatorio)
    })
}

async function gerarMegoSena(qtdNumeros,tentativas){
    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1,60,numeros))
        }
        return numeros
    } catch {
        if(tentativas > 10) {
            throw "Não deu certo!"
        } else {
            return gerarMegoSena(qtdNumeros,tentativas + 1)
        }
    }
}

gerarMegoSena(25)
    .then(console.log)
    .catch(console.log)