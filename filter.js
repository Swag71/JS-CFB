const idades = [13,15,16,17,18,19,22,32,27]
const maior=idades.filter((val)=>{
    if(val>=18){
        return val
    }
})
const menor=idades.filter((val)=>{
    if(val<18)
    return val
})

console.log(idades)
console.log(maior)
console.log(menor)