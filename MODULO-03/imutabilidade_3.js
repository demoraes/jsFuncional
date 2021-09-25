const pessoa = {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: {
        rua: 'Feliz!'
    }
}

// Atribuição por Referência
const outraPessoa = pessoa

// Passagem por Referência
// Neste caso estamos criando um novo array o que deixa o objeto original imutavel
function alterarPessoa(pessoa) {
    const novaPessoa = { ...pessoa }
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua = 'ABC'
    return novaPessoa
}


// Nesse caso estamos mutando os dados de entrada e tb é uma passagem por referência
// function alterarPessoa(pessoa) {
//     novaPessoa.nome = 'João'
//     novaPessoa.cidade = 'Fortaleza'
// }

const novaPessoa = alterarPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)

let a = 3
let b = a // atribuição por valor (copia!)

a++
b--

console.log(a, b)