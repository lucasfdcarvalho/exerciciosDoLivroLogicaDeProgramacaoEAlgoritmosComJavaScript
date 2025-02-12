// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const nome = frm.inFuncionario.value.trim().toLowerCase(); // obtém o nome, remove os espaços iniciais e finais e deixa tudo em minúsculo
    if(!nome.includes(" ")){
        alert("Insira um Nome Válido");
        return;
    }
    const partes = nome.split(" "); // cria um vetor para cada espaço presente
    let email = ""; // variável para concatenar
    const tam = partes.length; // obtém o tamanho do vetor partes
    for(let i = 0; i < tam - 1; i++){
        email += partes[i].charAt(0); 
    }
    email += partes[tam - 1] + "@empresa.com.br";
    resp.innerText = email;
});