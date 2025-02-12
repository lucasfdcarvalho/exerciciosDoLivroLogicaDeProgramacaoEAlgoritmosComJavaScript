// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    const nome = frm.inNome.value; // lê o nome
    const sexoMasculino = frm.inMasculino.checked; // lê o sexo
    const altura = Number(frm.inAltura.value); // obtém a altura
    let pesoIdeal // declara a variável
    if(sexoMasculino){
        pesoIdeal = 22 * Math.pow(altura, 2); // calcula o peso ideal
    }
    else{
        pesoIdeal = 21 * Math.pow(altura, 2); // calcula o peso
    }
    resp.innerText = `${nome}: Seu peso ideal é ${pesoIdeal.toFixed(3)} kg`; // exibe a resposta
});
// cria um ouvinte de evento para o reset
frm.addEventListener("reset", () => {
    resp.innerText = ""; // limpa a resposta
});

/*
const pesoIdeal = sexoMasculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2); 
*/