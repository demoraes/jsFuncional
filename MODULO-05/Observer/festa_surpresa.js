const readline = require('readline')

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}

function namorada() {
    console.log('N: Apagar as luzes')
    console.log('N: Pedir silêncio')
    console.log('N: Surpresa')
}

function sindico(evento) {
    console.log('S: Monitorando o barulho!')
    console.log(`S: ${evento.resp} gg`)
    console.log(`S: ${evento.data}`)
}

async function porteiro(interessados) {
    while (true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q)')
        if (resp.toLowerCase() === 's') {
            // os obsercadores são notificados
            (interessados || []).forEach(obs => obs({ resp, data: Date.now() }))
        } else if (resp.toLowerCase() === 'q') {
            break
        }
    }
}

porteiro([namorada, sindico])

// obterResposta('Esse é um teste? ')
//     .then(console.log)