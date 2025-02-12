const frm = document.querySelector("form"); // cria referências para os elementos
const resp = document.querySelector("h3");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const nome = frm.inNome.value.trim(); // obtém o nome e remove os espaços iniciais e finais
    if(!nome.includes(" ")){ // se o nome não contém espaços internos
        alert("Informe o nome completo..."); // exibe a mensagem
        return; // e retorna
    }

    const priEspaco = nome.indexOf(" "); // descobre a posição do primeiro espaço
    const ultEspaco = nome.lastIndexOf(" "); // descobre a posição do último espaço
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco); // pega o nome e o sobrenome

    resp.innerText = `Crachá: ${cracha}`; // exibe a resposta
});