const letrasAninhadas = [
    ['o', ['l'], 'á'],
    [' '],
    ['m', ['u', 'n', 'd'], 'o'],
    ['!', '!', '!', '!']
]

const letras = letrasAninhadas.flat(Infinity)

const resultado = letras
    .flatMap(l => l.toUpperCase())
    .reduce((a, b) => a + b)

console.log(resultado)

// const resultado = letras
//     .map(l => l.toUpperCase())
//     .reduce((a, b) => a + b)

// console.log(resultado)