function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    this.dados_anonimos=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        })
    }
    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        })
    }
}
aluno('Italo',8)
dados_anonimos()
dados_arrow()