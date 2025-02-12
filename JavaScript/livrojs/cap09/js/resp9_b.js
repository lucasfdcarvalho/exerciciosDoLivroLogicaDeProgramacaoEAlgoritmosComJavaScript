// obtém as referências
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const adicionarProduto = (produto) =>{
    if(!localStorage.getItem("produto")){
        localStorage.setItem("produto", produto);
        frm.reset();
    }
    else{
        if(localStorage.getItem("produto").includes(produto)){
            alert("Produto já está na lista");
            frm.inProduto.focus();
            return;
        }
        else{
            const prod = localStorage.getItem("produto") + ";" + produto;
            localStorage.setItem("produto", prod);
            frm.reset();
        }
    }
    exibirLista();
}

const exibirLista = () =>{
    if(!localStorage.getItem("produto")){
        return;
    }
    const partes = localStorage.getItem("produto").split(";");
    partes.sort();
    let resposta = "Produtos Adicionados\n" + "-".repeat(40) + "\n";
    for(let i = 0; i < partes.length; i++){
        resposta += partes[i] + "\n";
    }
    resp.innerText = resposta;
}

const limparLista = () =>{
    if(localStorage.getItem("produto")){
        localStorage.removeItem("produto");
        resp.innerText = "";
    }
}

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const produto = frm.inProduto.value;
    adicionarProduto(produto);
})

frm.btLimpar.addEventListener("click", limparLista);
window.addEventListener("load", exibirLista)