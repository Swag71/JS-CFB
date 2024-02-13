function somar(...valores){
    res=0
    for(let v of valores){
        res+=v
    }
    return res
}
console.log(somar(2,2,1,2))