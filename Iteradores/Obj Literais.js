const add = document.getElementById('btn_add')
const res = document.getElementById('res')

const Pessoa = {
    nome:'',
    idade:'',
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
        this.nome=nome
    },
    setIdade:function(idade){
        this.idade=idade
    },
}

let pessoas= []

const addPessoa=()=>{
        const div=document.createElement('div')
        div.setAttribute('class','pessoa')
        div.innerHTML=`Nome : ${Pessoa.getNome()} <br/> Idade : ${Pessoa.getIdade()}`
        res.appendChild(div)
}

btn_add.addEventListener('click',(evt)=>{
    const nome = document.getElementById('f_nome').value
    const idade = document.getElementById('f_idade').value
    Pessoa.setIdade=(idade)
    Pessoa.setNome=(nome)
    pessoas.push(Pessoa)
    console.log(pessoas)
    addPessoa(this)
})
    // NAO CONSEGUI RESOLVER FODASE