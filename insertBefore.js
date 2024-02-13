const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnRemoverCurso=document.getElementById('btnRemoverCurso')
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnAntes=document.getElementById('btnAdicionarNovoCursoAntes')
const btnDPS=document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso=document.getElementById('nomeCurso')

let indice = 0

const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=curso

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")
    
    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    novoElemento.addEventListener('click',(evt)=>{
        evt.target.classList.toggle('se')
    })
    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
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

btnAntes.addEventListener('click',(evt)=>{
    const rs=radioSelecionado()
    if(nomeCurso.value!=''){
        const novoCurso=criarNovoCurso(nomeCurso.value)
        const cursoSelecionado=rs.parentNode.parentNode
        caixaCursos.insertBefore(novoCurso,cursoSelecionado)

    }
    alert('Digite o nome de um Curso.')
})

btnDPS.addEventListener('click',(evt)=>{
    const rs=radioSelecionado()
    if(nomeCurso.value!=''){
        const novoCurso=criarNovoCurso(nomeCurso.value)
    const cursoSelecionado=rs.parentNode.parentNode
    caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)
    }else{
        alert('Digite o nome do Curso.')
    }
    
})