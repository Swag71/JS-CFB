const valores = [1,20,30,40]
const it_valores =valores[Symbol.iterator]()

console.log(valores)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)

// false = array n terminou / true = fim do array