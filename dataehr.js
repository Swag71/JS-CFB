const div_data=document.getElementById('div_data')
const drelogio=document.getElementById('drelogio')

const data = new Date()

let dia = data.getDate()
dia=dia<10?'0'+dia:dia

let mes = data.getMonth()
mes=mes<10?'0'+mes:mes

const data_r=`${dia}/${mes}/${data.getFullYear()}`
div_data.innerHTML=data_r

console.log(data.toDateString())

const relogio=()=>{
  const data = new Date()
  let hora = data.getHours()
  hora=hora<10?'0'+dhoraia:hora
  let minuto = data.getMinutes()
  minuto=minuto<10?'0'+minuto:minuto
  let segundos = data.getSeconds()
  segundos=segundos<10?'0'+segundos:segundos
  const horarlg = `${hora}:${minuto}:${segundos}`
  drelogio.innerHTML=horarlg
}

const intervalo =setInterval(relogio,1000)

relogio()

// getDate() = Dia do mês
// getDay() = Dia da Semana (número)
// getFullYear() = Ano com 4 dígitos
// getHours() = Horas
// getMilliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = Mês
// getSeconds()  = Segundos
// getTime() = Timestamp (milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC
// Date.now() = Timestamp (milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFullYear() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define Minutos
// setSeconds()  = Define Segundos
// setMilliseconds() = Define milisegundos
// toDateString() = Retorna somente a data