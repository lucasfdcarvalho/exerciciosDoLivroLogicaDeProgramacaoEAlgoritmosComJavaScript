const tbPalavras = document.querySelector("table");
const ckMostrar = document.querySelector("input[type='checkbox']");


const montarTabela = () =>{
    if(localStorage.getItem("jogoPalavra")){
        const palavra = localStorage.getItem("jogoPalavra").split(";");
        const dica = localStorage.getItem("jogoDica").split(";");

        for(let i = 0; i < palavra.length; i++){
            const linha = tbPalavras.insertRow(-1);

            const col1 = linha.insertCell(0);
            const col2 = linha.insertCell(1);
            const col3 = linha.insertCell(2);

            col1.innerText = palavra[i];
            col2.innerText = dica[i];
            col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>";
        }
    }
};

ckMostrar.addEventListener("change", () =>{
    if(ckMostrar.checked){
        montarTabela();
    }
    else{
        window.location.reload();
    }
});

tbPalavras.addEventListener("click", (e) =>{
    if(e.target.classList.contains("exclui")){
        const palavra = e.target.parentElement.parentElement.children[0].innerText;

        if(confirm(`Confirma Exclusão da Palavra: ${palavra}`)){
            e.target.parentElement.parentElement.remove();

            localStorage.removeItem("jogoPalavra");
            localStorage.removeItem("jogoDica");


            const palavras = [];
            const dicas = [];

            for(let i = 1; i < tbPalavras.rows.length; i++){
                palavras.push(tbPalavras.rows[i].cells[0]);
                dicas.push(tbPalavras.rows[i].cells[1]);
            }

            localStorage.setItem("jogoPalavra", palavras.join(";"));
            localStorage.setItem("jogoDica", dicas.join(";"));
        }
    }
});