// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
frm.btEsconder.disabled = true;
// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const senha = frm.inSenha.value; // obtém a senha
    const erros = []; // cria um vetor de erros
    if(!(senha.length >= 8 && senha.length <= 15)){
        erros.push("possuir entre 8 e 15 caracteres");
    }
    if(senha.match(/[0-9]/g) == null){
        erros.push("possuir, no mínimo, 1 número");
    }
    if(!senha.match(/[a-z]/g)){
        erros.push("possuir, no mínimo, 1 letra minúscula");
    }
    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length < 2){
        erros.push("possuir, no mínimo, 2 letras maiúsculas");
    }
    if(!senha.match(/\W|_/g)){
        erros.push("possuir, no mínimo, 1 símbolo");
    }
    if(erros.length == 0){
        resp.innerText = "OK! Senha Válida";
    }else{
        resp.innerText = `Erro... A senha deve ${erros.join(", ")}`;
    }
});

frm.btMostrar.addEventListener("click", () =>{
    frm.inSenha.type = "text";
    frm.btEsconder.disabled = false;
});
frm.btEsconder.addEventListener("click", () =>{
    frm.inSenha.type = "password";
    frm.btEsconder.disabled = true;
});