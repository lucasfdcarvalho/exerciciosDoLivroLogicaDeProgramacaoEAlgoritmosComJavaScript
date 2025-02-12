// cria referência ao form e aos elementos de respostas pelo seu id
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");
// cria o ouvinte de evento
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value; // obtém o nome do veículo
    resp1.innerText = `Promoções: ${veiculo}`; // exibe o nome no resp1
    const preco = Number(frm.inPreco.value); // obtém o preço e converte para número
    const entrada = preco / 2; // calcula a entrada
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`; // exibe o preço da entrada
    const parcela = entrada / 12; // calcula o valor da parcela em 12x
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`; // exibe o resultado
    e.preventDefault(); // evita o envio do form(dados)
});