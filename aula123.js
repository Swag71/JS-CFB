const p_temp=document.getElementById('p_temp')
const p_nivel=document.getElementById('p_nivel')
const p_press=document.getElementById('p_press')
const btn_texto=document.getElementById('btn_texto')


const obterDados=()=>{
const endpoint='https://0b68512f-b7ac-4a9a-ae4b-a3925f5ab47c-00-29x91ncigszxg.riker.replit.dev/'
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
  console.log(dados);
  p_temp.innerHTML='Temperatura : '+dados.temp
  p_press.innerHTML='Pressão : ' + dados.pressao
  p_nivel.innerHTML='Nivel : ' + dados.nivel
 })
}

btn_texto.addEventListener('click',()=>{
  let intervalo=setInterval(obterDados,3000)
  obterDados()
})
