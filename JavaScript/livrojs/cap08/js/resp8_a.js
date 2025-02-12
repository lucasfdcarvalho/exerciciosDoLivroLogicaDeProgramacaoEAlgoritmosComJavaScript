// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const nome = frm.inNome.value; // obtém o nome
    const idade = Number(frm.inIdade.value); // obtém a idade
    const tracos = retornarTracos(nome);
    const categoria = categorizarAluno(idade);
    resp.innerText = `${nome}\n${tracos}\nCategoria: ${categoria}`;
});


const retornarTracos = (nome) =>{
    /*const partes = nome.split(" ");
    let resposta = "";
    for(let i = 0; i < partes.length; i++){
        resposta += "-".repeat(partes[i].length) + " ";
    }
    return resposta;*/
    
    let resposta = "";
    for(const letra of nome){
        if(letra != " "){
            resposta += "-";
        }
        else{
            resposta += " ";
        }
    }
    return resposta
    
}

const categorizarAluno = (idade) =>{
    let resposta;
    if(idade <= 12){
        resposta = "Infantil";
    }
    else if(idade >= 18){
        resposta = "Adulto";
    }
    else{
        resposta = "Juvenil";
    }
    return resposta;
}
