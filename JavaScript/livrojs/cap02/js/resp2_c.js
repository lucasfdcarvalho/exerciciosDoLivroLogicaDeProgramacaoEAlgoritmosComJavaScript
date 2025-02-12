// cria uma referência ao form e ao elemento h3
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value; // obtém o conteúdo
    const preco = frm.inPreco.value;
    const unidade = preco / 2; // calcula o terceiro valor
    const valor = (preco * 3) - unidade; // calcula o preço de 3 unidades do mesmo produto
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valor.toFixed(2)}`; // exibe os resultados
    resp2.innerText = `O terceiro produto custa apenas R$: ${unidade.toFixed(2)}`;

    e.preventDefault(); // evita o envio do form
});