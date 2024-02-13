const p_array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[21,25,19,20,17,18,22]
p_array.innerHTML="["+elementos_array+"]"

btnVerificar.addEventListener("click",(evt)=>{
    const ret=elementos_array.every((e,i)=>{
        if(e<18){
            resultado.innerHTML=`Array não conforme na posição ${i}`
        } else{
            resultado.innerHTML=`Array conforme!`
        return e>=18
        }
    })
})  

//every confere se os elementos estao em conformidade com a regra aplicada