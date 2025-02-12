// cria as referências
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = "";
let numConta = 0;
let valorTotal = 0;

// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const descricao = frm.inDescricao.value; // obtém os dados
    const valor = Number(frm.inValor.value);
    numConta++; // soma o contador com 1
    valorTotal = valorTotal + valor; // soma os valores
    // resposta = resposta + descricao + "- R$: " + valor.toFixed(2) + "\n";
    resposta = `${resposta}${descricao} - R$: ${valor.toFixed(2)}\n`; // acumula as respostas
    resp1.innerText = `${resposta} ----------------------------`; // exibe as respostas
    resp2.innerText = `${numConta} Contas(s) - Total R$: ${valorTotal.toFixed(2)}`;

    frm.inDescricao.value = ""; // limpa os campos
    frm.inValor.value = "";
    frm.inDescricao.focus(); // posiciona no campo inDescricao do form(focaliza)

}); 