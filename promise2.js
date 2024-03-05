const numero=document.getElementById('numero')
const btn_promessa=document.getElementById('btn_promessa')

btn_promessa.addEventListener('click',(evt)=>{
  numero.innerHTML='No meu tempo...'
  Promessa()
  .then((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.add('ok')
    numero.classList.remove('erro')
  })
  .catch((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.remove('ok')
    numero.classList.add('erro')
  })
})

const Promessa=()=>{
  let p= new Promise((ok,errado)=>{
    let resultado = false
    let tempo = 3000
    setTimeout((tempo) => {
      if(resultado==true){
        ok('Deu td ceto,zé!')
      } else{
        errado('errou zbct!')
      }
    }, tempo);
  })
  return p
}

numero.innerHTML='No seu tempo...'

