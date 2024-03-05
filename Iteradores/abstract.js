class carPadrao{
    constructor(){
        //classes abrstratas
        if(this.constructor=== carPadrao){
            throw new TypeError('Esta calsse não pode ser instânciada')
        }
        if(this.ligar===undefined){
            throw new TypeError('É obrigatório implementar o metodo ligar!')
        }
        if(this.desligar===undefined){
            throw new TypeError('É obrigatório implementar o metodo desligar!')
        }
        this.rodas=4
        this.portas=4
        this.ligado=false
    }
}

class carro extends carPadrao{
    constructor(tipo,eT){
        super()
        this.turbo= new turbo(eT)
        if(tipo==1){
            this.velmax=120
            this.nome='normal'
        } else if(tipo==2){
            this.velmax=160
            this.nome='Esportivo'
        }  else if(tipo==3){
            this.velmax=200
            this.nome='SuperEsportivo'
        } 
        this.velmax+=this.turbo.pot
    }
    info(){
        console.log(`Nome : ${this.nome}`)
        console.log(`Vel Max : ${this.velmax}`)
        console.log(`Turbo : ${this.turbo.pot}`)
        console.log(`Rodas : ${this.rodas}`)
        console.log(`Portas : ${this.portas}`)
        console.log(`Ligado : ${this.ligado}`)
        console.log('--------------')
    }
    ligar(){
        this.ligado=true
    }
    desligar(){
        this.ligado=false
    }
}


class turbo {
    constructor(e){
        if(e==0){
            this.pot=0
        } if(e==1){
            this.pot=50
        } if(e==2){
            this.pot=75
        } if(e==3){
            this.pot=100
        }
    }    
}

class CarEsp extends carro{
    constructor(eT){    
        super(4,eT)
        this.tipoInfo=0
        this.velmax=300
        this.velmax=300+this.turbo.pot
        this.nome='Carro Especial'
    }
    info(){
        if(this.tipoInfo==1){
            super.info()
        } else {
        console.log(`Nome : ${this.nome}`)
        console.log(`Vel Max : ${this.velmax}`)
        console.log(`Turbo : ${this.turbo.pot}`)
        console.log('--------------')
        }
    }
}   

const c1 = new carro(1,0)
const c2 = new carro(1,1)
const c3 = new CarEsp(3)

c1.info()
c2.info()
c3.info()
