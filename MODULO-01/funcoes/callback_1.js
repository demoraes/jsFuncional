function exec(fn, a, b){
    return fn(a,b)
}

const somaNoTerminal = (a,b) => console.log(a + b)
const subtrairNoTerminal = (c,d) => console.log(c - d)
const subtrair = (c,d) => c - d

exec(somaNoTerminal, 2, 5)
exec(subtrairNoTerminal, 4, 9)

const r = exec(subtrair, 2, 3)
console.log(r)
  

setInterval(() => console.log('Exec ...'), 1000)