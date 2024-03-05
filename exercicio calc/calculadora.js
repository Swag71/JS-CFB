const Tnum = [...document.getElementsByClassName('num')]
const TeOp = [...document.getElementsByClassName('op')]
const Tres = document.getElementsByClassName('res')
const display = document.getElementById('display')
const ton = document.getElementById('ton')
const Tlimpar = document.getElementById('tlimpar')
const Tigl = document.getElementById('tigual')

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
    deciaml=false
    display.innerHTML='0'
})

Tigl.addEventListener('click', (evt)=>{
    sinal=false
    decimal=false
    const res = eval(display.innerHTML)
    display.innerHTML=res
})

