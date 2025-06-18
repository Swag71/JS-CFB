let nome= new String('Bruno')
let canal = new String('CFBCursos')
let canal2 = new String('CFBCursos')


console.log(nome);
console.log(typeof(nome));

console.log(nome.charAt(0))
nome=nome.concat(canal)
// console.log(nome.concat(canal)) "msm coisa" q o de cima
console.log(nome);

console.log(nome.indexOf('o'))
console.log(nome.lastIndexOf('o'))

console.log(canal.localeCompare(canal2));
console.log(nome.replace('n','x'));
console.log(canal.search('Cursos'))
console.log(canal.slice(3,5));

let arr_nome=nome.split('u')
console.log(arr_nome);

let parte1=nome.substring(0,5)
console.log(parte1);

let xibiu =nome.startsWith('Bruno')
console.log(xibiu)
