const frm = document.querySelector("form");
const dvJogos = document.querySelector("#divJogos");

/*const gravarClube = (clube) =>{
    if(localStorage.getItem("clubes")){
        const partes = localStorage.getItem("clubes").split(";");
        if(partes.includes(clube)){
            alert("Clube Já Cadastrado");
            return;
        }
        const clubes = localStorage.getItem("clubes");
        localStorage.setItem("clubes", clubes + ";" + clube);
    }
    else{
        localStorage.setItem("clubes", clube);
    }
}*/

const inserirLinha = (clube) =>{
    const h5 = document.createElement("h5");
    const texto = document.createTextNode(clube);
    h5.appendChild(texto);
    h5.className = "text-end me-2";
    h5.style.fontStyle = "italic";
    dvJogos.appendChild(h5);
}

const criarTabela = () =>{
    if(!localStorage.getItem("clubes")){
        alert("Nenhum Time Adicionado");
        return;
    }
    const partes = localStorage.getItem("clubes").split(";");
    if(partes.length % 2 != 0){
        alert("Número Ímpar de Clubes");
        return;
    }
    const h4 = document.createElement("h4")
    const texto = document.createTextNode("Tabela de Jogos");
    h4.appendChild(texto);
    dvJogos.appendChild(h4);
    const tabela = document.createElement("table");
    tabela.className = "table table-striped";

    for(let i = 0; i < partes.length; i+= 2){
        const linha = tabela.insertRow(-1);
        const col1 = linha.insertCell(0);
        col1.innerText = partes[i];
        const col2 = linha.insertCell(1);
        col2.innerText = partes[i + 1]
    }

    dvJogos.appendChild(tabela);
    btMontar.disabled = true;
    btAdicionar.disabled = true;
}

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const clube = frm.inClube.value;
    if(!clube){
        alert("Insira um Nome Válido");
        return;
    }

    if(localStorage.getItem("clubes")){
        const partes = localStorage.getItem("clubes").split(";");
        if(partes.includes(clube)){
            alert("Clube Já Cadastrado");
            return;
        }
        const clubes = localStorage.getItem("clubes");
        localStorage.setItem("clubes", clubes + ";" + clube);
    }
    else{
        localStorage.setItem("clubes", clube);
    }

    inserirLinha(clube);
    frm.inClube.value = "";
    frm.inClube.focus();
});

frm.btMontar.addEventListener("click", criarTabela);

window.addEventListener("load", () =>{
    if(localStorage.getItem("clubes")){
        const partes = localStorage.getItem("clubes").split(";");
        for(const parte of partes){
            inserirLinha(parte);
        }
    }
});

frm.addEventListener("reset", (e) =>{
    e.preventDefault();
    localStorage.removeItem("clubes");
    location.reload();
});