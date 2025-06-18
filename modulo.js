import { ctt } from "./modulo contados.js"
const listactts = document.getElementById('listaContatos')
const btn_gravar = document.getElementById('btn_gravar')

btn_gravar.addEventListener('click',()=>{
  const cont={
    nome:document.getElementById('f_nome').value,
    telefone:document.getElementById('f_telefone').value,
    email:document.getElementById('f_email').value,
  }
  ctt.addCtt(cont,listactts)
  console.log(ctt.getTdsCtt())
})