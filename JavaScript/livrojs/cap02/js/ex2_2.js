// cria referência ao form e aos elementos h3 e h4 (respostas)
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");
// cria um "ouvinte" de evento
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value; // obtém o título do campo
    resp1.innerText = titulo; // adiciona o título ao h3
    const duracao = frm.inDuracao.value; // obtém a duração
    const horas = Math.floor(duracao / 60); // arredonda para baixo o resultado
    const minutos = duracao % 60; // obtém o resto da divisão
    resp2.innerText = `${horas} horas(s) e ${minutos} minutos(s)`; // exibe os resultados dos calculos
    e.preventDefault(); // evita o envio do formulário(dados)
});