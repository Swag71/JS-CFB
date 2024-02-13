const obj1=document.getElementsByTagName("div")
const obj2=[...document.getElementsByTagName("div")]

obj2.forEach(Element =>{
    Element.innerHTML="Curso"
})

console.log(obj1)
console.log(obj2)