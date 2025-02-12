// cria as referências
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const data = frm.inData.value; // obtém a data
    const valor = Number(frm.inMulta.value);
    const desconto = valor - (0.20 * valor);
    const dataLimite = new Date(); // cria a data limite
    const partes = data.split("-"); // divide a data em partes
    dataLimite.setDate(Number(partes[2]));
    dataLimite.setMonth(Number(partes[1]) - 1);
    dataLimite.setFullYear(Number(partes[0]));
    dataLimite.setDate(dataLimite.getDate() + 90)
    const dia = dataLimite.getDate();
    const mes = dataLimite.getMonth() + 1;
    const ano = dataLimite.getFullYear()
    resp1.innerText = "Data Limite para Pagto com Desconto: " + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano;
    resp2.innerText = `Valor com Desconto R$: ${desconto.toFixed(2)}`;
});