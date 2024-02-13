const caixa1 = document.getElementById('caixa1')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']

cursos.map((el,i)=>{
    const novoElemento= document.createElement('div') //criou nova div
    novoElemento.innerHTML=el
    novoElemento.setAttribute('class','curso c1')
    novoElemento.setAttribute('id',`${i+1}`) //++ para começar acontar do 1 n do 0

    const btn_lixeira =document.createElement('img')
    btn_lixeira.setAttribute('src','./lixeira.png')
    btn_lixeira.setAttribute('class','btn_lixeira')
    novoElemento.appendChild(btn_lixeira)
    
    btn_lixeira.addEventListener('click', (evt)=>{
        console.log(evt.target)
        caixa1.removeChild(evt.target.parentNode)
    })
    caixa1.appendChild(novoElemento)
})