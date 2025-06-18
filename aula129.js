import { Cxmsg } from "./cxmsg.js"
const config={
  cor:"#080"
}
  Cxmsg.config(config)

const timer=document.getElementById('timer')
const btn_iniciar=document.getElementById('btn_iniciar')
const btn_parar=document.getElementById('btn_parar')
const btn_zerar=document.getElementById('btn_zerar')
const btn_parcial=document.getElementById('btn_parcial')
const parciaisregistradas=document.querySelector('#parciaisregistradas')

let intervalo=null
let tmpini=null

const contador=()=>{
  const tmpatual=Date.now()
  let cont=tmpatual-tmpini
  let seg=(cont)/1000
  timer.innerHTML=converter(seg )
}

const converter=(seg)=>{
  const hora=Math.floor(seg/3600)
  const resto=seg%3600
  const min=Math.floor(resto/60)
  const segs=Math.floor(resto%60)
  const form=(hora<10?'0'+hora:hora)+':'+(min<10?'0'+min:min)+':'+(segs<10?'0'+segs:segs)

  return form
}

btn_iniciar.addEventListener('click',(evt)=>{
  tmpini=Date.now()
  intervalo=setInterval(contador,1000)
})

btn_parcial.addEventListener('click',(evt)=>{
  let parcial='<div>'+timer.innerHTML+'<div>'
  parciaisregistradas.innerHTML+=parcial
})

btn_parar.addEventListener('click',(evt)=>{
  clearInterval(intervalo)
})

btn_zerar.addEventListener('click',(evt)=>{
  tmpini=Date.now()
  timer.innerHTML='00:00:00'
  clearInterval(intervalo)
  parciaisregistradas.innerHTML=''
  Cxmsg.mostrar('Cronometro','Cronometro Zerado')
})