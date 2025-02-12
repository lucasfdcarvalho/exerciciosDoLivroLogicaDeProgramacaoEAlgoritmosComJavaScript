// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) =>{
    const nome = frm.inNome.value; // obtém o nome digitado no form
    resp.innerText = `Olá ${nome}`; // exibe a resposta do programa
    e.preventDefault(); // evita envio do form
});
// Propriedade value - obtém ou altera o conteúdo dos campos de formulário HTML
// Propriedade innerText - obtém ou altera o conteúdo de elementos de textos do documento HTML
// Propriedade innerHTML - quase a mesma coisa que o innerText, porém renderiza os códigos HTML existentes no seu conteúdo