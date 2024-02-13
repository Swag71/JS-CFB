const caixa1 = document.getElementById('caixa1')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']

cursos.map((el,i)=>{
    const novoElemento= document.createElement('div') //criou nova div
    novoElemento.innerHTML=el
    novoElemento.setAttribute('class','curso c1')
    novoElemento.setAttribute('id',`${i+1}`) //++ para começar acontar do 1 n do 0
    caixa1.appendChild(novoElemento)
})