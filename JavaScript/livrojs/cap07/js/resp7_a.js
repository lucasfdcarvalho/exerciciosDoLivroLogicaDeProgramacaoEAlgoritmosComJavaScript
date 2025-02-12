// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
frm.btDescriptografar.disabled = true;
// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const mensagem = frm.inMensagem.value.trim()
    let resposta = "";
    const tam = mensagem.length;
    for(let i = 1; i <= tam - 1; i = i + 2){
        resposta += mensagem.charAt(i);
    }

    for(let i = 0; i < tam; i = i + 2){
        resposta += mensagem.charAt(i);
    }
    resp.innerText = resposta;
    frm.btDescriptografar.disabled = false;
});

frm.btDescriptografar.addEventListener("click", () =>{
    resp.innerText = frm.inMensagem.value;
})