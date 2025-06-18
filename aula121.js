const f_texto=document.getElementById('f_texto')
const p_texto=document.getElementById('p_texto')
const btn_texto=document.getElementById('btn_texto')

btn_texto.addEventListener('click',(evt)=>{

})

let num=10
let curso='JavaScript'
localStorage.setItem('Nome','Italo')
localStorage.setItem('Curso',curso)
localStorage.setItem('Nota',num)
alert(localStorage.getItem(localStorage.key(2)))
alert(localStorage.getItem('Numero'))