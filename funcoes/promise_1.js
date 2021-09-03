

function primeiroNome(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana','Bia','Carlos','Gabriel'])     
 })
.then(primeiroNome)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log)
