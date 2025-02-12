const frm = document.querySelector("form"); // cria referências para os elementos
const resp = document.querySelector("span");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const fruta = frm.inFruta.value.toUpperCase(); // obtém o nome da fruta e a torna maiúscula
    let resosta = ""; // variável para concatenar
    for(const letra of fruta){
        if(letra == fruta.charAt(0)){ // se a letra for igual a letra inicial da fruta
            resosta += fruta.charAt(0); // adicione a resposta
        }
        else{ // senão
            resposta += "_"; // adiciona um sublinhado
        }
    }
    resp.innerText = resosta; // exibe a resposta
    frm.inFruta.value = "*".repeat(fruta.length); // preenche com o caracter * conforme o tamanho da palavra
});