calculoDeRankeada(105, 2)
let heroiX = "SuperJacob"
let rank 
let saldo = saldoDeVitorias

function calculoDeRankeada(vitorias,derrotas){
    saldoDeVitorias = vitorias - derrotas
    return saldoDeVitorias
}

if (saldo <= 10){
        rank = "nivel ferro."
    } else if ( saldo <= 20){
        rank = "nivel bronze."
    } else if ( saldo <= 50){
        rank = "nivel prata."
    } else if ( saldo <= 80){
        rank = "nivel ouro."
    } else if ( saldo <= 90){
        rank = "nivel diamante."
    } else if ( saldo <= 100){
        rank = "nivel lendário."
    } else 
        {rank = "nivel imortal."}

console.log("O Heroi " + heroiX + " tem um saldo de " + saldo + " e está no " + rank)