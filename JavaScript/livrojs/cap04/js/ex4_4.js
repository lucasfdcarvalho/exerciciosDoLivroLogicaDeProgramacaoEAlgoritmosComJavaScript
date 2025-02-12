// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    const horaBrasil = Number(frm.inHoraBrasil.value); // obtém o valor
    let horaFranca = horaBrasil + 5; // calcula a hora na França
    if(horaFranca >= 24){
        horaFranca = horaFranca - 24; // subtrai os 24 para ficar na formatação de horas
    }
    resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`; // exibe a resposta
});
