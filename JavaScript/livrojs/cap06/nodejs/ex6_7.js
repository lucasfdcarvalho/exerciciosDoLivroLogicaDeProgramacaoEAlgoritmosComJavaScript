const prompt = require("prompt-sync")();
console.log("Informe o valor dos saques ou 0 para sair");
const saques = [];
do{
    const valor = Number(prompt("Saque R$: "));
    if(valor == 0){
        break;
    }
    saques.push(valor);
    if(valor % 10 == 0){
        console.log("Saque Realizado com Sucesso");
    }
    else{
        console.log("Erro... Valor Inválido (deve ser múltiplo de 10)");
    }
}while(true)

console.log("Saques Válidos");
console.log("-".repeat(40));
const validos = saques.filter(saque => saque % 10 == 0);
for(const valido of validos){
    console.log(`${valido.toFixed(2)}`);
}
console.log("-".repeat(40));
const soma = validos.reduce((acumulador, aux) => acumulador + aux, 0);
console.log(`Total dos Saques: R$ ${soma.toFixed(2)}`);
const invalidos = saques.length - validos.length;
console.log(`N. de Tentativas de Saques (saques inválidos): ${invalidos}`);

