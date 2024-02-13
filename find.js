const p_array = document.getElementById('array')
const txt_pesquisar = document.getElementById('txt_pesquisar')
const btnpesquisar = document.getElementById('btnPesquisar')
const resultado = document.getElementById('resultado')

const elementos_array= [10,20,30,40,50]
p_array.innerHTML= `[${elementos_array}]`

btnpesquisar.addEventListener('click',(evt)=>{
    resultado.innerHTML='Valor não encontrado'
    const ret =elementos_array.find((e,i)=>{
        if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML=`Valor encontrado ${e} na posição ${i}`
            return e
        } 
    })
    console.log(ret)
})
