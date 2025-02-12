const prompt = require("prompt-sync")(); // adiciona o pacote
const num = Number(prompt("Número (centena): ")); // obtém o número em centena
if(num < 100 || num >= 1000){
    console.log("Erro... deve ser uma centena");
    return;
}
const unidade = num % 10; // descobre a unidade
const dezena = Math.floor((num % 100) / 10); // descobre a dezena
const centena = Math.floor(num / 100); // descobre a centena
console.log(`Invertido: ${unidade}${dezena}${centena}`); // exibe a resposta