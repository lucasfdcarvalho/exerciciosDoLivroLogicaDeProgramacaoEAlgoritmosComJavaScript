// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    const velocidadePermitida = Number(frm.inPermitida.value); // obtém os valores
    const velocidadeCondutor = Number(frm.inCondutor.value);
    const VintePorcento = velocidadePermitida + (0.2 * velocidadePermitida); // calcula os 20% da velocidade permitida
    const situacao = velocidadeCondutor <= velocidadePermitida ? "Sem Multa" : velocidadeCondutor <= VintePorcento ? "Multa Leve" : "Multa Grave";
    resp.innerText = `Situação: ${situacao}`;
    //let situacao; // declara a variável
    /*if(velocidadeCondutor <= velocidadePermitida){
        situacao = "Sem Multa";
    }
    else if(velocidadeCondutor <= VintePorcento){
        situacao = "Multa Leve";
    }
    else{
        situacao = "Multa Grave"
    }
    resp.innerText = `Situação: ${situacao}`; // exibe a resposta
    */
});




