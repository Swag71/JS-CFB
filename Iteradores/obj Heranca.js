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