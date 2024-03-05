const numero=document.getElementById('numero')

let promise= new Promise((ok,errado)=>{
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

promise.then((retorno)=>{
  numero.innerHTML=retorno
  numero.classList.add('ok')
  numero.classList.remove('erro')
})
promise.catch((retorno)=>{
  numero.innerHTML=retorno
  numero.classList.remove('ok')
  numero.classList.add('erro')
})

numero.innerHTML='Eis perando...'

