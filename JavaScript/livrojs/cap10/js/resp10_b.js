const frm = document.querySelector("form");
const dvNome = document.querySelector("#divNome");

const insirirLinha = (nome) =>{
    const partes = nome.split(" ");
    const cores = ["yellow", "blue", "green", "orange", "red", "black", "purple", "pink", "violet", "brown"];
    for(const parte of partes){
        const h3 = document.createElement("h3");
        const texto = document.createTextNode(parte);
        const corAleatoria = Math.floor(Math.random() * 10);
        h3.appendChild(texto);
        h3.style.color = cores[corAleatoria];
        dvNome.appendChild(h3);
    }
}

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const nome = frm.inNome.value.trim();
    const partes = nome.split(" ");
    if(partes.length == 1){
        alert("Insira o Nome Completo");
        frm.inNome.focus();
        return;
    }
    if(dvNome.querySelectorAll("h3").length != 0){
        const h3s = dvNome.querySelectorAll("h3");
        for(const h3 of h3s){
            dvNome.removeChild(h3);
        }
    }
    insirirLinha(nome);
});