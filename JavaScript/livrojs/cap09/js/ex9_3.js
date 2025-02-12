// obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const verApostaExiste = (peso) =>{
    if(localStorage.getItem("melanciaPeso")){
        const pesos = localStorage.getItem("melanciaPeso").split(";");
        return pesos.includes(peso.toString());
    }
    else{
        return false;
    }
}

const mostrarApostas = () =>{
    if(!localStorage.getItem("melanciaNome")){
        resp.innerText = "";
        return;
    }
    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    let linhas = "";

    for(let i = 0; i < nomes.length; i++){
        linhas += nomes[i] + " - " + pesos[i] + "gr \n";
    }

    resp.innerText = linhas;
}

window.addEventListener("load", mostrarApostas);

const exibirVencedor = () =>{
    if(!localStorage.getItem("melanciaNome")){
        alert("Não há apostas cadastradas");
        return;
    }

    const pesoCorreto = Number(prompt("Qual o peso correto da melancia: "));

    if(pesoCorreto == 0 || isNaN(pesoCorreto)){
        return;
    }

    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    // defini um vencedor inicial
    let vencedorNome = nomes[0];
    let vencedorPeso = Number(pesos[0]);

    for(let i = 1; i < nomes.length; i++){
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
        const difAposta = Math.abs(pesos[i] - pesoCorreto);

        if(difAposta < difVencedor){
            vencedorNome = nomes[i];
            vencedorPeso = pesos[i];
        }
    }

    let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr";
    mensagem += "\n" + "-".repeat(40);
    mensagem += "\nVencedor: " + vencedorNome;
    mensagem += "\nAposta: " + vencedorPeso + "gr";
    alert(mensagem);
}

const limparLista = () =>{
    if(localStorage.getItem("melanciaNome")){
        if(confirm("Confirma exclusão de todas as apostas?")){
            localStorage.removeItem("melanciaNome");
            localStorage.removeItem("melanciaPeso");
            mostrarApostas();
        }
    }
    else{
        alert("Nenhuma Aposta Foi Feita");
    }
}


// adiciona um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const nome = frm.inNome.value;
    const peso = Number(frm.inPeso.value);
    if(verApostaExiste(peso)){
        alert("Alguém já apostou este peso, informe outro...");
        frm.inPeso.focus();
        return;
    }

    if(localStorage.getItem("melanciaNome")){
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
        localStorage.setItem("melanciaNome", melanciaNome);
        localStorage.setItem("melanciaPeso", melanciaPeso);
    }else{
        localStorage.setItem("melanciaNome", nome);
        localStorage.setItem("melanciaPeso", peso);
    }

    mostrarApostas();
    frm.reset();
    frm.inNome.focus();
});

frm.btLimpar.addEventListener("click", limparLista);

frm.btVencedor.addEventListener("click", exibirVencedor);

