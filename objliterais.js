const objetos=document.getElementById('objetos')

const computador={
  cpu:'',
  ram:'',
  hd:'',
  info:function(){
  console.log(`CPU: ${this.cpu}`)
  console.log(`RAM: ${this.ram}`)
  console.log(`HD: ${this.hd}`)
  }
}
delete(computador.hd)
const c1 =Object.assign({},computador)
c1.info()

const c2 = Object.create(computador)
c2.cpu='i9'
c2.ram='64'
c2.hd='2tb'
c2.info()

const computadores=[

  {
    CPU:'i9',
    RAM:'64',
    HD:'2tb',
  },
  {
    CPU:'i7',
    RAM:'32',
    HD:'2tb',
  },
  {
    CPU:'i5',
    RAM:'16',
    HD:'1tb',
}]

computadores.forEach((c)=>{
  const div=document.createElement('div')
  div.innerHTML=c.CPU +'<br/>'+ c.RAM+'<br/>'+c.HD
  div.setAttribute('class','computador')
  objetos.appendChild(div)
})
// console.log(computadores)