// cria referência ao form e aos elementos h3 pelo seu id
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value; // obtém o conteúdo
    const preco = frm.inPreco.value;
    resp1.innerText = `Promoção de ${medicamento}`; // exibe o nome do medicamento
    const valor = Math.floor(preco * 2); // arredonda o valor do preço para baixo e multiplica por 2
    resp2.innerText = `Leve 2 por apenas R$: ${valor.toFixed(2)}`; // exibe o resultado

    e.preventDefault(); // evita o envio do form
});