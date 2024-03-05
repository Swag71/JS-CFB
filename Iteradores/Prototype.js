const nave=function(energia){
    this.energia=energia
    this.disparos=30
}

nave.prototype.vidas=3
nave.prototype.disparar=function(){
    if(this.disparos>0){
        this.disparos-=3 //forma certa  de subtrair 
    }
}
const n1 =new nave(100)

n1.disparar()
n1.disparar()

console.log(n1.disparos)
console.log(n1.vidas)
console.log(n1.energia)

//prototype serve para adcionar metodos/propriedades aos objetos dps da classe ser instanciada/criada 
//aula 67