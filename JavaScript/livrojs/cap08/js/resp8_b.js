// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const nome = frm.inNome.value.trim(); // obtém o nome
    if(!validarNome(nome)){
        alert("Insira um Nome Válido");
        frm.inNome.focus();
        return;
    }

    resp.innerText = `Senha Inicial: ${obterSobrenome(nome)}${contarVogais(nome)}`;

});

const validarNome = (nome) =>{
    if(nome.includes(" ")){
        return true;
    }
    else{
        return false;
    }
}

const obterSobrenome = (nome) =>{
    const partes = nome.split(" ");
    const tam = partes.length;
    const resposta = partes[tam - 1].toLowerCase();

    return resposta;

}

const contarVogais = (nome) =>{
    let num = 0;
    for(const letra of nome){
        const letraUC = letra.toUpperCase();
        if(letraUC == "A" || letraUC == "E" || letraUC == "I" || letraUC == "O" || letraUC == "U"){
            num++;
        }
    }

    return num < 10 ? "0" + num : num;
}