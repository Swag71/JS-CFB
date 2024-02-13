const jogador1={nome: "Bruno", energia: 100, vida: 3, magia : 150 }
const jogador2={nome: "Pj", energia: 100, vida: 5, velocidade: 90}
const jogador3={...jogador1,...jogador2}

console.log(jogador3)