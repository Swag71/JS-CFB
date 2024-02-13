const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnRemoverCurso=document.getElementById('btnRemoverCurso')
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")


cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")
    
    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
    
})

const radioSelecionado=()=>{
    const todosRadios=[...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado=todosRadios.filter((el)=>{
        return el.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener('click',(evt)=>{
    const rs=radioSelecionado()
    if(rs==undefined){
        alert('Selecione um Curso!')
    }
    const cursoSelecionado=rs.parentNode.previousSibling.textContent
    alert(`Curso Selecionado : ${cursoSelecionado}`)
})

btnRemoverCurso.addEventListener('click',(evt)=>{
    const rs=radioSelecionado()
    if(rs==undefined){
        alert('Selecione um Curso!')
    }
    const cursoSelecionado=rs.parentNode.parentNode
    cursoSelecionado.remove()
    
})