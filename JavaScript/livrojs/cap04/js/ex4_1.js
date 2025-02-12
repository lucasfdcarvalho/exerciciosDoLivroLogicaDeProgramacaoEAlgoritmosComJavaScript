// cria as referências
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// criar um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value); // lê os valores das notas 1 e 2
    const nota2 = Number(frm.inNota2.value);
    const media = (nota1 + nota2) / 2; // calcula a média
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`; // exibe a média
    if(media >= 7){
        resp2.innerText = `Parabéns ${nome}!Você foi aprovado(a)`; // exibe o resultado
        resp2.style.color = "blue"; // muda a cor do texto
    }
    else{
        resp2.innerText = `Ops ${nome}!Você foi reprovado(a)`;
        resp2.style.color = "red"; // muda a cor do texto
    }
});