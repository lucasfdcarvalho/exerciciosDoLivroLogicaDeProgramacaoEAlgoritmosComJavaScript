const prompt = require("prompt-sync")(); // adiciona o pacote para a entrada de dados
console.log("Informe os clientes em ordem de chegada ou 'Fim' no nome para sair"); // exibe a mensagem
const clientes = []; // declara o vetor dos clientes
do{
    const nome = prompt("Nome: "); // obtém o nome
    if(nome == "Fim"){
        break; // sai do loop
    }
    const idade = Number(prompt("Idade: ")); // obtém a idade
    clientes.push({nome, idade}); // adiciona o nome e a idade do cliente ao vetor
    console.log("Ok! Cliente inserido na fila..."); // exibe a mensagem
}while(true)

console.log("\nFila Preferencial"); // exibe as mensagens
console.log("-".repeat(40)); 
const preferencial = clientes.filter(cliente => cliente.idade >= 60); // cria um vetor com os clientes que tem idade maior ou igual a 60
preferencial.forEach((fila,i) =>{
    console.log(`${i + 1}. ${fila.nome}`); // exibe o número e o nome do cliente
});
console.log("\nFila Normal");
console.log("-".repeat(40));
const normal = clientes.filter(cliente => cliente.idade <= 59); 
normal.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`);
});