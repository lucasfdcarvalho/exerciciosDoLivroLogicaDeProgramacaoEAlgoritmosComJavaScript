// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    const numero = Number(frm.inNumero.value); // obtém o valor
    let resposta = `Entre ${numero} e 1: `; // declara a variável para acumular os valores
    for(let i = numero; i > 1; i--){ // cria um for decrescente
        resposta = resposta + i + ","; // acumula a resposta
        
    }
    resposta = resposta + "1."; 
    resp.innerText = resposta; // exibe a resposta
});