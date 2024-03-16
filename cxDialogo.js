const btn_alert = document.getElementById('btn_alert')
const btn_confirm = document.getElementById('btn_confirm')
const btn_prompt = document.getElementById('btn_prompt')

btn_alert.addEventListener('click',()=>{
  alert('Minha pika já ta é durakkkkkkkkkkkk!!')
})

btn_confirm.addEventListener('click',()=>{
  if(confirm('Você gosta de Futebol?')){
    console.log('YES')
  } else{
    console.log('No')
  }
})

btn_prompt.addEventListener('click',()=>{
  const nome=prompt('Digite seu nome!','XUpaKaba')
  if(nome==null){
    console.log('Botão cancelar precionado')
  } else{
    console.log(`Nome digitado : ${nome}`)
  }
})