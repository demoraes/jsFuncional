function textoComTamanhoEntre(min) {
    return function (max) {
        return function (erro) {
            return function (texto) {
                const tamanho = (texto || '').trim().length

                if (tamanho < min || tamanho > max) {
                    throw erro
                }
            }
        }
    }
}

function aplicarValidacao(fn) {
    return function (valor) {
        // Lazy evaluations
        try {
            fn(valor)
        } catch (e) {
            return { error: e }
        }
    }
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome produto inválido!')
const validaNomeProduto = aplicarValidacao(forcarNomeProdutoValido)

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }
const p2 = { nome: 'AB', preco: 14.99, desc: 0.25 }
console.log(validaNomeProduto(p1.nome))
console.log(validaNomeProduto(p2.nome))
