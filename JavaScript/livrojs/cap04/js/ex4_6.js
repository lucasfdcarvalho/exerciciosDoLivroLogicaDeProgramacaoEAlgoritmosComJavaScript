// cria as referências
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    const saque = Number(frm.inSaque.value); // obtém o valor
    if(saque % 10 != 0){ // se o resto da divisão entre o valor do saque e 10 for diferente de 0, ou seja, se não for divisível
        alert("Valor inválido para as notas disponíveis (R$ 10, 50, 100)");
        frm.inSaque.focus();
        return; 
    }
    const notas100 = Math.floor(saque / 100); // descobre quantas notas de 100 são necessárias e arredonda para baixo
    let resto = saque % 100; // descobre o resto da divisão com 100
    const notas50 = Math.floor(resto / 50); // descobre a quantidade de notas de 50
    resto = resto % 50; // descobre o resto da divisão com 50
    const notas10 = Math.floor(resto / 10); // descobre a quantidade de notas 10
    if(notas100 > 0){ // se as notas de 100 for maior que zero
        resp1.innerText = `Notas de R$100: ${notas100}`; // exibe a quantidade
    }
    if(notas50 > 0){
        resp2.innerText = `Notas de R$50: ${notas50}`; // exibe a quantidade
    }
    if(notas10 > 0){
        resp3.innerText = `Notas de R$10: ${notas10}`; // exibe o resultado
    }
});