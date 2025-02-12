const prompt = require("prompt-sync")(); // adiciona o pacote para a entradada de dados
const valor = Number(prompt("Valor R$: ")); // lê os dados
const numParcelas = Number(prompt("N. de Parcelas: "));
const valorParcelas = Math.floor(valor / numParcelas); // calcula as parcelas
const valorParcelaFinal = valorParcelas + (valor % numParcelas) // calcula a última parcela
for(let i = 1; i < numParcelas; i++){
    console.log(`${i}a parcela: R$ ${valorParcelas.toFixed(2)}`); // exibe até a penúltima parcela
}
console.log(`${numParcelas}a parcela: R$ ${valorParcelaFinal.toFixed(2)}`); // exibe a última parcela