const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#divQuadro");

const gravarLista = () =>{
    const tarefas = document.querySelectorAll("h5");
    if(tarefas.length == 0){
        alert("Nenhuma Tarefa para Gravar...");
        return;
    }
    let resposta = "";
    for(let i = 0; i < tarefas.length; i++){
        if(i == tarefas.length - 1){
            resposta += tarefas[i].innerText;
        }
        else{
            resposta += tarefas[i].innerText + ";";
        }
    }

    localStorage.setItem("tarefas", resposta);

    if(localStorage.getItem("tarefas")){
        alert("Ok! Tarefas Salvas");
    }
}

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const tarefa = frm.inTarefa.value;
    const h5 = document.createElement("h5");
    const texto = document.createTextNode(tarefa);
    h5.appendChild(texto);
    dvQuadro.appendChild(h5);
    frm.reset();
    frm.inTarefa.focus();
});

frm.btSelecionar.addEventListener("click", () =>{
    const tarefas = document.querySelectorAll("h5");
    if(tarefas.length == 0){
        alert("Não há tarefas para selecionar");
        return;
    }

    let aux = -1;

    for(let i = 0; i < tarefas.length; i++){
        if(tarefas[i].className == "tarefa-selecionada"){
            tarefas[i].className = "tarefa-normal";
            aux = i;
            break;
        }
    }

    if(aux == tarefas.length - 1){
        aux = -1;
    }

    tarefas[aux + 1].className = "tarefa-selecionada";
});

frm.btRetirar.addEventListener("click", () =>{
    const tarefas = document.querySelectorAll("h5");

    let aux = -1;

    for(let i = 0; i < tarefas.length; i++){
        if(tarefas[i].className == "tarefa-selecionada"){
            aux = i;
        }
    }

    if(aux == -1){
        alert("Selecione uma tarefa para removê-la...");
        return;
    }

    if(confirm(`Confirma a Exclusão de "${tarefas[aux].innerText}"`)){
        dvQuadro.removeChild(tarefas[aux]);
    }
});

frm.btGravar.addEventListener("click", gravarLista);

window.addEventListener("load", () =>{
    if(localStorage.getItem("tarefas")){
        const partes = localStorage.getItem("tarefas").split(";");
        
        partes.forEach(parte =>{
            const h5 = document.createElement("h5");
            const texto = document.createTextNode(parte);
            h5.appendChild(texto);
            dvQuadro.appendChild(h5);
        })
    }
});