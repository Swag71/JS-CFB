let valor = 0
function add(v){
    return valor+v
}
valor=(add(10))
console.log(valor)

valor=(add(7))
console.log(valor)

function somar(n1=0,n2=0){
    console.log(n1+n2)
}

somar(14,16)