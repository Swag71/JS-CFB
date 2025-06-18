const f_nome=document.getElementById('f_nome')
const f_nota=document.getElementById('f_nota')
const f_msg=document.getElementById('f_msg')
const btn_validar=document.getElementById('btn_validar')

btn_validar.addEventListener('click',(evt)=>{
  let estadoValidacao=f_nota.validity
  
  if(estadoValidacao.valueMissing){
    f_nota.setCustomValidity('Campo obrigatório')
  } else if(estadoValidacao.rangeOverflow){
    f_nota.setCustomValidity('Valor maximo 10')
  }else if(estadoValidacao.rangeUnderflow){
    f_nota.setCustomValidity('Valor minimo 0')
  }
    // f_nota.reportValidity()

  f_msg.innerHTML=f_nota.validationMessage
  evt.preventDefault()
})


//Métodos de validação do DOM
//checkValidity()
//setCustomValidity()

//Propriedade de validação do DOM
//validity
//validationMessage

//Propriedades de validação
/*
customError: true, se uma mensagem de validação personalizada for definida.
patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
rangeOverflow: true, se o valor de um elemento for maior que seu atributo max.
rangeUnderflow: true, se o valor de um elemento for menor que seu atributo min.
stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
valid: true, se o valor de um elemento for válido.
*/