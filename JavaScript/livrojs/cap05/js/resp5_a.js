// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    const fruta = frm.inFruta.value;  // obtém os dados
    const num = Number(frm.inNumero.value);
    let sequencia = "";
    for(let i = 1; i < num; i++){
        sequencia = sequencia + fruta + "*";
    }
    resp.innerText = sequencia + fruta;
});