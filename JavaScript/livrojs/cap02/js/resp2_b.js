// cria uma referência ao form e ao elemento h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inValor.value);
    const tempo = Number(frm.inTempo.value);
    const valor = Math.ceil(tempo / 15) * preco;
    resp.innerText = `Valor a Pagar R$: ${valor.toFixed(2)}`;

    e.preventDefault();
});