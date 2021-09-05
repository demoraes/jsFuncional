function funcionarOuNao(valor, chaneceErro) {
    return new Promise((resolve,reject) => {
        try {
            con.log('temp')
            if(Math.random() < chaneceErro){
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }     
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(v => console.log(v))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!!'))
