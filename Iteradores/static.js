class Npc{
    static alerta=true
    constructor(energia){
            this.energia=energia
            this.alerta=false
    }
    info=function(){
        console.log(`Energia : ${this.energia}`)
        console.log(`Alerta : ${(Npc.alerta?'Sim':'Não')}`)
        console.log('--------------')
    }
}
j
const p1 = new Npc(100)
const p2 = new Npc(80)
const p3 = new Npc(20)

p1.info()
p2.info()

// aula 66
//static define as atribuiçoes 
// static serve para a classe e n para as suas intancias/child/variaveis