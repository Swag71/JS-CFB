const f=function(...valores){
    res=0
    for(let v of valores){
        res+=v
    }
    return res
}
console.log(f(10,20))