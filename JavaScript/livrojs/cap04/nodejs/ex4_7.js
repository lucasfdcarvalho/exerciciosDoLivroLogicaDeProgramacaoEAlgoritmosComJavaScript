const prompt = require("prompt-sync")(); // adiciona o pacote
const pessoas = Number(prompt("N. Pessoas: ")); // obtém o número de pessoas
const peixes = Number(prompt("N. Peixes: ")); // lê os números de peixes
let valor; // declara a variável
if(peixes > pessoas){
    valor = (peixes - pessoas) * 12 + (20 * pessoas); // calcula o valor
}
else{
    valor = pessoas * 20; // calcula o valor caso os peixes estão em menor quantidade
}
console.log(`Pagar R$: ${valor.toFixed(2)}`); // exibe a resposta
