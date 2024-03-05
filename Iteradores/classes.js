const tMilitar = document.getElementById('f_tipoMilitar')
const tNormal = document.getElementById('f_tipoNormal')
const fBlindagem = document.getElementById('f_blindagem')
const fMunicao = document.getElementById('f_municao')
const carros = document.getElementById('carros')
const add = document.getElementById('btn_addCarro')
const fNome = document.getElementById('f_nome')
const fPortas = document.getElementById('f_portas')

let a_carro = []

const qmRemover=(qm)=>{
    a_carro=a_carro.filter((el)=>{
    return el.nome!=qm
    })
}

add.addEventListener('click',(evt)=>{
    if(tNormal.checked){
        const c =new carro(fNome.value,fPortas.value)
        a_carro.push(c)
    }else{
        const c =new Militar(fNome.value,fPortas.value,fMunicao.value,fBlindagem.value)
        a_carro.push(c)
    }
    exbCarros()
})

tNormal.addEventListener('click',(evt)=>{
    fBlindagem.value=0
    fMunicao.value=0
    fBlindagem.value=0
    fMunicao.value=0
    fMunicao.setAttribute('disabled','disabled')
    fBlindagem.setAttribute('disabled','disabled')
    console.log('teste')
})

tMilitar.addEventListener('click',(evt)=>{
    fBlindagem.value=0
    fMunicao.value=0
    fNome.value=''
    fPortas.value=0
    fMunicao.removeAttribute('disabled')
    fBlindagem.removeAttribute('disabled')
    console.log('teste')
})

const exbCarros=()=>{
    carros.innerHTML=''
    a_carro.forEach((c)=>{ 
    const div = document.createElement('div')
    const btn = document.createElement('button')
    btn.innerHTML='Remover'
    btn.addEventListener('click',((evt)=>{
        const remover=(evt.target.parentNode.dataset.nome)
        qmRemover(remover)
        exbCarros()
    }))
    div.setAttribute('class','carro')
    div.setAttribute('data-nome',c.nome)
    div.innerHTML+=`Nome : ${c.nome} <br/>`
    div.innerHTML+=`Portas : ${c.portas}<br/>`
    div.innerHTML+=`Blindagem : ${c.blindagem}<br/>`
    div.innerHTML+=`Municao : ${c.municao}<br/>`
    div.appendChild(btn)
    carros.appendChild(div)
    })
}

class carro {  //classe pai/base
    constructor(nome,portas){
        this.nome=nome
        this.portas=2
        this.ligado=false
        this.vel=0
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor    
    }
}

class Militar extends carro{ //classe filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas) //super pega elementos da classe pai
        this.blindagem=blindagem
        this.municao=municao
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }

}

const c1=new carro('Corolla',4)
c1.ligar()
c1.setCor('Preto')

const c2=new Militar('Cara de Lata',3,100,30)
c2.setCor('Preto')
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar() 
c2.atirar()


console.log(`Nome : ${c1.nome}`)
console.log(`Portas : ${c1.portas}`)
console.log(`Ligado : ${(c1.Ligado?'Sim':'Não')}`)
console.log(`Cor : ${c1.cor}`)
console.log(`Velocidade : ${c1.vel}`)
console.log('------------------')

console.log(`Nome : ${c2.nome}`)
console.log(`Portas : ${c2.portas}`)
console.log(`Ligado : ${(c2.Ligado?'Sim':'Não')}`)
console.log(`Cor : ${c2.cor}`)
console.log(`Velocidade : ${c2.vel}`)
console.log(`Munição : ${c2.municao}`)
console.log(`Blindagem : ${c2.blindagem}`)