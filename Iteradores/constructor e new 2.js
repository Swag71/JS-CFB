class carro{
    constructor(pnome,ptipo,pmarca){
        this.nome=pnome
        if(ptipo==1){
            this.tipo='Esportivo'
            this.velmax=340
            this.marca='McLaren'
        } else if(ptipo==2){
            this.tipo='Sedã'
            this.velmax=205
            this.marca='Toyota'
        }else{
            this.tipo='SUV'
            this.velmax=194
            this.marca='Jeep'
        }
    }
        info(){
        console.log(`Nome : ${this.nome}`)
        console.log(`Tipo : ${this.tipo}`)
        console.log(`V.Max : ${this.velmax}`)
        console.log(`Marca : ${this.marca}`)
        console.log('---------------------')
    }

    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVmax(){
        return this.velmax
    }
    getMarca(){
        return this.marca
    }

    setNome(nome){
        this.nome=nome
    }
    setVmax(vmax){
        this.velmax=vmax
    }
    setTipo(tipo){
        this.tipo=tipo
    }
    setMarca(marca){
        this.marca=marca
    }

}

let p1 = new carro('Corolla',2)
let p2 = new carro('Artura',1)
let p3 = new carro('Compass',3)

// console.log(p1.nome)
// console.log(p1.tipo)
// console.log(p2.nome)
// console.log(p2.tipo)
// console.log(p3.nome)
// console.log(p3.tipo)


//p1.info()

// p1.setNome('Toro')
// p1.setTipo('Utilitario')
// p1.setVmax(90)

console.log(p1.getNome())
console.log(p1.getTipo())
console.log(p1.getVmax())
console.log(p1.getMarca())
