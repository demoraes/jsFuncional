// arrow function
const teste = () => console.log('Feliz Natal !!!')

teste()


const saudacao = nome => sobrenome => `Fala ${nome} ${sobrenome} blz`
console.log(saudacao('Gabriel')('moraes'))

const somar = (...numeros) => {
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total
}

console.log(somar(2,3,4,5))
console.log(somar(2,3,4,5,7,8)) 