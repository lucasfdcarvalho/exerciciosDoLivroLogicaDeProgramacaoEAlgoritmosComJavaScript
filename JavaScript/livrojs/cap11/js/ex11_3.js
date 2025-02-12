const frm = document.querySelector("form");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const palavra = frm.inPalavra.value.trim();
    const dica = frm.inDica.value;

    if(palavra.includes(" ")){
        alert("Insira uma Palavra Válida");
        frm.inPalavra.focus();
        return;
    }

    if(localStorage.getItem("jogoPalavra")){
        const partes = localStorage.getItem("jogoPalavra").split(";");
        if(partes.includes(palavra)){
            alert("Palavra Já cadastrada");
            frm.inPalavra.value = "";
            frm.inPalavra.focus();
            return;
        }
        localStorage.setItem("jogoPalavra", localStorage.getItem("jogoPalavra") + ";" + palavra);
        localStorage.setItem("jogoDica", localStorage.getItem("jogoDica") + ";" + dica);
    }
    else{
        localStorage.setItem("jogoPalavra", palavra);
        localStorage.setItem("jogoDica", dica);
    }

    if(localStorage.getItem("jogoPalavra")){
        alert(`Ok! Palavra ${palavra} Cadastrada com Sucesso`);
    }

    frm.reset();
    frm.inPalavra.focus();
});