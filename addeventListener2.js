const caixa1 = document.getElementById('caixa1')
const caixa2 = document.getElementById('caixa2')
const btn = document.getElementById('btn_transferir')
const todosCursos=[...document.querySelectorAll('.curso')]

todosCursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const curso = evt.target
        curso.classList.toggle('destaque')
    }) 
})

btn.addEventListener('click', ()=>{
    const selecionados = [...document.querySelectorAll('.destaque')]
    const naoSelecionado = [...document.querySelectorAll('.curso:not(.destaque)')]
    selecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    naoSelecionado.map((el)=>{
    caixa1.appendChild(el)
        })
})




