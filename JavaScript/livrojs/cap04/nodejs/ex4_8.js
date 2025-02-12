const prompt = require("prompt-sync")(); // adiciona o pacote
const total = Number(prompt("Valor da Compra R$: ")); // lê o total de uma compra
const aux = Math.floor(total / 20); // números de parcelas sem condição
let parcelas
if(aux == 0){
    parcelas = 1;
}
else if(aux > 6){
    parcelas = 6;
}
else{
    parcelas = aux;
}
const valorParcela = total / parcelas; // calcula as parcelas
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`); // exibe a resposta