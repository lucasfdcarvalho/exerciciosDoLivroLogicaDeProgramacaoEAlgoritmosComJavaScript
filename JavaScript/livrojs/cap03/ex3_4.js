const prompt = require("prompt-sync")(); // adiciona o pacote ao programa
const peso = Number(prompt("Peso da Ração (kg): ")); // lê os dados de entrada
const consumo = Number(prompt("Consumo Diário (gr): "));
const pesoEmGr = peso * 1000; // transforma o peso em gramas
const duracao = Math.floor( pesoEmGr / consumo); // calcula a duração da ração
const sobra = pesoEmGr % consumo; // calcula a sobra
console.log(`Duração: ${duracao}`); // exibe as respostas
console.log(`Sobra: ${sobra}`);