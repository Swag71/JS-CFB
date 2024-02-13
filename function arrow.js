const somar=(v1,v2)=>v1+v2    /*Nao precisa usar return pq so tem 1 linha de cod*/
console.log(somar(3,2))

const soma=(n1,n2)=>{
    res = n1+n2
    if(res%2==0){
        console.log('Par')
    } else{
        console.log('Impar')
    }
}
console.log(soma(21,2))