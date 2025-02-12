const prompt = require("prompt-sync")(); // adiciona o pacote ao programa
const salario = Number(prompt("Salário R$: ")); // lê os dados de entrada
const tempo = Number(prompt("Tempo (anos): "));
const quadrienios = Math.floor(tempo / 4); // calcula a divisão do tempo pelos 4 anos e arredonda para baixo
const salarioFinal = salario + (salario * quadrienios / 100); // calcula o salário final
console.log(`Quadriênios: ${quadrienios}`); // exibe as respostas
console.log(`Salário Final R$: ${salarioFinal.toFixed(2)}`);