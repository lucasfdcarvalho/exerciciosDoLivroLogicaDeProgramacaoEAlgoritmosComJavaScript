// cria as referências
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// criar um ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    const valor = Number(frm.inValor.value); // obtém o valor
    let tempo; // declara as variáveis
    let troco;
    if(valor < 1){ // se o valor for inferior à 1
        alert("Valor Insuficiente");
        frm.inValor.focus();
        return;
    }
    else if(valor >= 1 && valor < 1.75){ // se o valor for igual à 1
        tempo = "30 min";
        troco = valor - 1;
    }
    else if(valor >= 1.75 && valor < 3){ // se for maior que 1 e menor ou igual a 1.75
        tempo = "60 min";
        troco = Math.abs(valor - 1.75); // calcula o valor e transforma ele em positivo(absoluto)
    }
    else{ // senão
        tempo = "120 min";
        troco = Math.abs(valor - 30);
    }
    resp1.innerText = `Tempo: ${tempo}`; // exibe as respostas
    resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
});