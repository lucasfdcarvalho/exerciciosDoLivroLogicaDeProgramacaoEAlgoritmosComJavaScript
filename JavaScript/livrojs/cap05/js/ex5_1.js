// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    const numero = Number(frm.inNumero.value); // obtém o valor
    let resposta = ""; // declara a variável do tipo String para concatenar a resposta
    // cria um laço de repetição
    for(let i = 1; i <= 10; i++){
        // resposta = resposta + numero + "x" + i + "=" + (numero * i) + "\n";
        resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`;
    }
    resp.innerText = resposta;
});