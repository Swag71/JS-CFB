const p_temp=document.getElementById("p_temp")
const p_nivel=document.getElementById("p_nivel")
const p_press=document.getElementById("p_press")
const btn_texto=document.getElementById("btn_texto")

const obterDados=()=>{
    const endpoint="https://cfbcursos.repl.co/"
    fetch(endpoint)
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML="Temperatura: " + dados.temperatura
        p_nivel.innerHTML="Nível: " + dados.nivel
        p_press.innerHTML="Pressão: " + dados.pressao
    })
}

// let intervalo=setInterval(obterDados,3000)

let dados={
    nome:"Italo",
    canal:"RocketPocket",
    curso:"Javascript"
}

let cabecalho={
    method: "POST",
    body:JSON.stringify(dados)
}

const gravarDados=()=>{
    const endpoint="https://0b68512f-b7ac-4a9a-ae4b-a3925f5ab47c-00-29x91ncigszxg.riker.replit.dev/"
    fetch(endpoint,cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}

btn_texto.addEventListener('click',(evt)=>{
  gravarDados()
})