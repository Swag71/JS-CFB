const caixa= document.getElementById('caixa')

let musicas = new Set(['Musica Ruim','Musica Boa','Musica BRABA'])

musicas.add('Musica escutavel')

console.log(musicas)

musicas.forEach((el)=>{
    caixa.innerHTML+=`${el} <br/>`
})