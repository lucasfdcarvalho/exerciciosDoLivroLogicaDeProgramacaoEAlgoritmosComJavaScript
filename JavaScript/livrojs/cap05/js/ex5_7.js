// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("#outEspacos");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    const num = Number(frm.inNumero.value); // obtém o número
    let resposta = ""; // variável para acumular as respostas
    for(let i = 1; i <= num; i++){
        if(i % 2 == 1){
            resposta = resposta + "*"; // na posição ímpar do i: *
        }
        else{
            resposta = resposta + "_"; // na posição par: _
        }
    }
    resp.innerText = resposta; // exibe a resposta
});