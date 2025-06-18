import { cttas } from "./modulo BancoContatos.js";

let ctt={
  getTdsCtt:function(){
    return cttas
  },
  getCtt:function(i_cont){
    return cttas[i_cont]
  },
  addCtt:function(novoCtt,destinoDOM){
    const cont ={
      nome:novoCtt.nome,
    telefone:novoCtt.telefone,          //enviar as info p array
    email:novoCtt.email,
    }
    cttas.push(cont)

    destinoDOM.innerHTML=''
    
      cttas.forEach((c)=>{
    const div=document.createElement('div')
    div.setAttribute('class','contato')
    const p_nome=document.createElement('p')
    p_nome.innerHTML=c.nome
    const p_telefone=document.createElement('p')
    p_telefone.innerHTML=c.telefone
    const p_mail=document.createElement('p')
    p_mail.innerHTML=c.email
    div.appendChild(p_nome)
    div.appendChild(p_telefone)
    div.appendChild(p_mail)
    destinoDOM.appendChild(div)
    })
  }
}

export {ctt}