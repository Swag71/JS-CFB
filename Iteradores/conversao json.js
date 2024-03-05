const pessoa={
    nome:'W7',
    canal: 'CFB-CURSOS',
    Curso: 'JavaScript',
    aulas:{
        Aula01:'Introduçao',
        Aula02:'Variáveis',
        Aula03:'Condicional',
    }
}

const j_son=JSON.stringify(o_son) //obj p string
const o_son=JSON.parse(j_son) //string p obj

console.log(pessoa)
console.log(j_son)