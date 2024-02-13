const p_array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[12,13,14,15,16,19]
p_array.innerHTML="["+elementos_array+"]"

btnVerificar.addEventListener("click",(evt)=>{
    const ret=elementos_array.some((e,i)=>{
        if(e<18){
            resultado.innerHTML=`Array não conforme na posição ${i}`
        } else{
            resultado.innerHTML=`Ok!`
        return e>=18
        }
    })
})  