import {Cxmsg} from "./cxmsg.js"
const config={
  cor:"#48f",
  tipo:"sn",  //tipos: ok,sim,nao
  comando_sn: ()=>{}
}

const btn_mostarcxmsg=document.querySelector('#btn_mostarcxmsg')
const btn_mostarcxmsg2=document.querySelector('#btn_mostarcxmsg2')
const btn_mostarcxmsg3=document.querySelector('#btn_mostarcxmsg3')

btn_mostarcxmsg.addEventListener('click',()=>{
  Cxmsg.mostrar(config,'Demonhao 244','Vz Da 12')
})

btn_mostarcxmsg2.addEventListener('click',()=>{
  Cxmsg.mostrar(config,'Monitora','Pra num derrema mopai')
})
btn_mostarcxmsg3.addEventListener('click',()=>{
  Cxmsg.mostrar(config,'ANota','Terro da zona sul cá')
})