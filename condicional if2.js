function Nmaior(numb1, numb2){
    if(numb1>numb2){
        let maior = numb1
        console.log(`O numero de maior valor entre ${numb1} e ${numb2} é ${maior}`)
        return numb1
        
    } else if(numb1<numb2) {
        let maior = numb2
        console.log(`O numero de maior valor entre ${numb1} e ${numb2} é ${maior}`)
        return numb2 
    } else{
        console.log('Os números são iguais!')
    }
}

let numb1 = 141
let numb2 = 14
let maior = Nmaior(numb1, numb2)



