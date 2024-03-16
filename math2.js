const olhos=[...document.getElementsByClassName('olho')]

let x = 0
let y = 0

window.addEventListener('mousemove',(evt)=>{
  x=evt.clientX
  y=evt.clientY

  const rot=Math.atan2(x,y) * 180/Math.PI

  olhos.forEach((o)=>{
    o.style.transform='rotate('+rot+'deg)'
  })
})