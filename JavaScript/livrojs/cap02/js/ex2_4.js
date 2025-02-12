// cria referência ao form e ao elemento h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    const quilo = frm.inQuilo.value; // obtém contúdo dos campos
    const consumo = frm.inConsumo.value;
    const preco = quilo * (consumo / 1000); // calcula o valor a ser pago
    resp.innerText = `Valor a pagar R$: ${preco.toFixed(2)}`; // exibe a resposta

    e.preventDefault(); // previne o envio do form
});