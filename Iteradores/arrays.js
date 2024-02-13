const caixa=document.getElementById('caixa')

let cores=['Azul','Verde','Vermelho',['Escuro','Claro','Sangue']]
let curso=['HTML','CSS','JavaScript',cores]

curso.unshift('C++')

console.log(curso[3][3][2])

curso.map((el)=>{
    const p=document.createElement('p')
    p.innerHTML=el
    caixa.appendChild(p)
})
