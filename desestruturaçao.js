let a,b,c,d
[a,b,c,d]=[10,20,30,40]

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let Ab,Bc,Cd

// com object
({Ab,Bc,Cd}={Ab:'Disgrassa',Bc:'PeloSerto',Cd:'PossoCrer'})
console.log(Ab);
console.log(Bc);
console.log(Cd);

let numeros=()=>{
  return [10,20,30,40]
}
[a,b,c,d]=numeros()
console.log(a,b,c,d);

let numero=[10,20,30,40,50,60,69]

let=[AC,BD,...EF]=numero
// adiciona os valores restantes a variavel EF
console.log(AC);
console.log(BD);
console.log(EF);

const cores=()=>{
  return ['Preto','Vermelho','Branco','Azul-Marinho']
}
let[c1,c2,,c4]=cores()
// c3 n recebera valor nenhum
console.log(c1,c2,c4);

let texto='Curso de JavaScript'
let[p1,p2,p3]=texto.split(' ')
console.log(p1);
console.log(p2);
console.log(p3);
