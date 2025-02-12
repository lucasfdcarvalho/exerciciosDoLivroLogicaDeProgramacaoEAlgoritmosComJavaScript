// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    const numero = Number(frm.inNumero.value); // obtém o valor
    const raiz = Math.sqrt(numero); // calcula a raiz quadrada do número
    if(Number.isInteger(raiz)){ // se o resultado da raiz for inteira 
        resp.innerText = `Raiz: ${raiz}`; // exibe a resposta
    }
    else{ // senão
        resp.innerText = `Não há raiz exata para ${numero}`; // exibe a resposta
    }
});