// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    let numChinchilas = Number(frm.inChinchilas.value); // obtém os dados
    const anos = Number(frm.inAnos.value);
    let resposta = "";
    for(let i = 1; i <= anos; i++){
        if(i == 1){
            resposta = resposta + i + "a " + "Ano: " + numChinchilas + " Chinchilas" + "\n";
        }
        else{
            numChinchilas = numChinchilas * 3;
            resposta = resposta + i + "a " + "Ano: " + numChinchilas + " Chinchilas" + "\n";
        }
    }
    resp.innerText = resposta;
});