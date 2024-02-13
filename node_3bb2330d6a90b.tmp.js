/*function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc=cores()

console.log(itc.next().value)
console.log(itc.next().value)

function* perguntas(){
    const nome= yield 'Qual seu nome ?'
    const esporte= yield 'Qual seu esporte favorito ?'
    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}.`
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('italo').value)
console.log(itp.next('Futebol').value) */

function* contador(){
    let i=0
    while(true){
        i++
    }
}

const itc = contador()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
