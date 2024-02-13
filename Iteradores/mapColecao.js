const caixa=document.getElementById('caixa')

let mapa=new Map()

mapa.set(1,'HMTL')      // O 1° termo define a chave e o 2° termo o valor
mapa.set(2,'CSS')
mapa.set(3,'JavaScript')
mapa.set(4,'C++')

console.log(mapa)

mapa.delete(4)

let pes =2

if(mapa.has(1)){
    caixa.innerHTML=(`Presente na coleçao com valor ${mapa.get(pes)}`)
} else{
    caixa.innerHTML=('Não esta presente!')
}
res+=`<br/> O tamanho da coleção é ${mapa.size}`

mapa.forEach((el)=>{
    console.log(el)
})
//caixa.innerHTML=mapa.get(5)
// .get faz com q a chave seja impressa na pagina 
