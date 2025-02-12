const prompt = require("prompt-sync")(); // adiciona o pacote para a entradada de dados
const produto = prompt("Produto: "); // lê o produto
const numEtiquetas = Number(prompt("N. de Etiquetas: ")); // lê o número de etiquetas
for(let i = 1; i <= numEtiquetas / 2; i++){
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`); // dois em uma única linha. O método padEnd serve para adicionar espaços no final do texto
}
if(numEtiquetas % 2 == 1){ // se o número for ímpar
    console.log(produto); // imprime mais um produto
}