const Tnum = [...document.getElementsByClassName('num')]
const TeOp = [...document.getElementsByClassName('op')]
const Tres = document.getElementsByClassName('res')
const display = document.getElementById('display')
const Tlimpar = document.getElementById('tlimpar')
const Tigl = document.getElementById('tigual')
const tcpy = document.getElementById('tcpy')
const calc_aba = document.getElementById('calc_aba')
const calc =  document.getElementById('calc')
const img_seta = document.getElementById('img_seta')

let sinal=false
let decimal = false

Tnum.forEach((el)=>{
    el.addEventListener('click',(evt)=>{
        sinal=false
            if(evt.target.innerHTML==','){
                if(!decimal){
                decimal=true
                if(display.innerHTML=='0'){
                    display.innerHTML='0,'
                } else {
                display.innerHTML+=evt.target.innerHTML
                }
            }
            if(display.innerHTML=='0'){
                display.innerHTML=''}
        } else{
            display.innerHTML+=evt.target.innerHTML
        } 
        })
})  

TeOp.forEach((el)=>{
    el.addEventListener('click',(evt)=>{
        if (!sinal){
            sinal=true
        if(display.innerHTML=='0'){
            display.innerHTML=''
        }
        if(evt.target.innerHTML=='x'){
            display.innerHTML+='*'
        } else {
            display.innerHTML+=evt.target.innerHTML
        }
        }
    })
})  

Tlimpar.addEventListener('click', (evt)=>{
    sinal=false
    decimal=false
    display.innerHTML='0'
})

Tigl.addEventListener('click', (evt)=>{
    sinal=false
    decimal=false
    const res = eval(display.innerHTML)
    display.innerHTML=res
})

tcpy.addEventListener( 'click', (evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
})

calc_aba.addEventListener('click',(evt)=>{
    calc.classList.toggle('calc_exibir')
    if(calc.classList.contains('calc_exibir')){
        img_seta.setAttribute('src','img/Esquerda.svg')
    } else{
        img_seta.setAttribute('src','img/Direita.svg')
    }
})