const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el)=>{
    addEventListener('click',(evt)=>{
        const el=evt.target
    el.classList.add('destaque')
    console.log(el.id + ' Foi clicado.')
    })
})

c1.addEventListener('click', (evt)=>{
    const el=evt.target
    el.classList.add('destaque')
})