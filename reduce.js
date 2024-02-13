const p_array=document.querySelector("#array")
const btnReduzir=document.querySelector("#btnReduzir")
const resultado=document.querySelector("#resultado")

const elementos_array=[12,13,14,15,16,19]
let aux=[]

p_array.innerHTML="["+elementos_array+"]"  

btnReduzir.addEventListener('click', (evt)=>{
    resultado.innerHTML=elementos_array.reduce((ant,atu,pos)=>{
        return ant+atu
    })
})
