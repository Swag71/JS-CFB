const btn_add = document.getElementById('btn_add')
const res=document.querySelector('.res')

class Pessoa {
    constructor(pnome,pidade){
        this.nome=pnome
        this.idade=pidade
    }
        info(){
        console.log(`Nome : ${this.nome}`)
        console.log(`Idade : ${this.idade}`)
        console.log('---------------------')
    }

    getNome(){
        return this.nome
    }

    getidade(){
        return this.idade
    }

    setNome(nome){
        this.nome=nome
    }

    setidade(idade){
        this.idade=idade
    }
}

let pessoas= []

const addPessoa=()=>{
    pessoas.map((p)=>{
        const div=document.createElement('div')
        div.setAttribute('class','pessoa')
        div.innerHTML=`Nome : ${p.getNome()} <br/> Idade : ${p.getidade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener('click',(evt)=>{
    const nome = document.getElementById('f_nome')
    const idade = document.getElementById('f_idade')
    const p =new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value=''
    idade.value=''
    nome.focus()
    console.log(pessoas)   
    addPessoa()
})



