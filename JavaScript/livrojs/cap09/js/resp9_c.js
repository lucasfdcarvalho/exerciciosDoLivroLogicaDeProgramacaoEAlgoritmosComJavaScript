const frm = document.querySelector("form");
const resp1 = document.querySelector("span");
const resp2 = document.querySelector("h4");

const exibirPendentes = () =>{
    if(!localStorage.getItem("servico")){
        resp1.innerText = "0";
        return;
    }
    else{
        const partes = localStorage.getItem("servico").split(";");
        resp1.innerText = partes.length;
    }
}

const executarServico = () =>{
    if(!localStorage.getItem("servico")){
        alert("Nenhum serviço cadastrado");
        return;
    }
    const partes = localStorage.getItem("servico").split(";");
    const first = partes.shift();
    resp2.innerText = first;
    localStorage.setItem("servico", partes.join(";"));
    
    exibirPendentes();
}

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const servico = frm.inServico.value;
    if(localStorage.getItem("servico")){
        localStorage.setItem("servico", localStorage.getItem("servico") + ";" + servico);
    }
    else{
        localStorage.setItem("servico", servico);
    }
    exibirPendentes();

    frm.reset();
    frm.inServico.focus();
});

frm.btExecutar.addEventListener("click", executarServico);

window.addEventListener("load", exibirPendentes);