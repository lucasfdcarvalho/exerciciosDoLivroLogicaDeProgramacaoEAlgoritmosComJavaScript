// cria as referências
const frm = document.querySelector("form");

const taxaMulta = 2 / 100 // multa por atraso
const taxaJuros = 0.33 / 100 // juros por dia de atraso
// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const dataVenc = frm.inDataVenc.value; // obtemos a data
    const valor = Number(frm.inValor.value); // obtemos o valor da conta
    const hoje = new Date(); // obtive a data de hoje
    const vencido = new Date(); // cria a data de vencimento
    const partes = dataVenc.split("-"); // divide a data de vencimento em partes aaaa-mm-dd
    vencido.setDate(Number(partes[2])); // adiciona a data de vencimento
    vencido.setMonth(Number(partes[1]) - 1); // adiciona o mês de vencimento 
    vencido.setFullYear(Number(partes[0])); // adiciona o ano de vencimento
    const atraso = hoje - vencido; // subtraímos as datas em ms
    let multa = 0; // inicializa como 0
    let juros = 0;
    if(atraso > 0){
        const dias = atraso / 86400000 // converte em dias
        multa = taxaMulta * valor;
        juros = taxaJuros * valor * dias;
    }
    const total = juros + multa + valor; 
    frm.outMulta.value = multa.toFixed(2);
    frm.outJuros.value = juros.toFixed(2);
    frm.outTotal.value = total.toFixed(2);
});