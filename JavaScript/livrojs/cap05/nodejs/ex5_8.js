const prompt = require("prompt-sync")(); // adiciona o pacote para a entradada de dados
console.log("Programa Anos de Copa do Mundo. Digite 0 para sair"); // exibe a mensagem
console.log("---------------------------------------------------");
do{
    const ano = Number(prompt("Ano: ")); // obtém o ano
    if(ano == 0){
        break; // sai do loop
    }
    else if( ano == 1942 || ano == 1946){
        console.log(`Não houve Copa em ${ano} (Segunda Guerra Mundial)`)
    }
    else if((ano - 1930) % 4 == 0){ // se o ano - 1930 for divisível por 4, ele é ano de Copa
        console.log(`Sim! ${ano} é ano da Copa do Mundo!`); // exibe a mensagem
    }
    else{ // senão
        console.log(`Não... ${ano} não é ano de Copa do Mundo.`); // exibe a mensagem
    }
    
}while(true)
