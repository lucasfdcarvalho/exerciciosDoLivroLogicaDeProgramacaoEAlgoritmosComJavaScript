// cria as referências 
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const candidatos = []; // vetor global

// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const nome = frm.inCandidato.value; // obtém os dados
    if(!isNaN(nome)){
        alert("Insira Um Nome Válido");
        return;
    }
    const acertos = Number(frm.inAcertos.value);
    candidatos.push({nome,acertos}); // adicona o nome e os acertos dos candidatos
    frm.reset(); // limpa o campo
    frm.inCandidato.focus(); // posiciona o cursor no campo
    frm.btListar.dispatchEvent(new Event("click")); // dispara o evento de click no botão de listar
});

frm.btListar.addEventListener("click", () =>{
    if(candidatos.length == 0){
        alert("Não há candidatos para ser listados");
        return;
    }
    let lista = ""; // variável para concatenar
    for(const candidato of candidatos){
        const {nome, acertos} = candidato // desestrutura o vetor
        lista += nome + " - " + acertos + " acertos\n";
    }
    resp.innerText = lista;
});

frm.btAprovados.addEventListener("click", () =>{
    if(candidatos.length == 0){
        alert("Não há candidatos para ser feito a Verificação");
        return;
    }
    const notaAprovação = Number(prompt("Números de Acertos para Aprovação?"));
    if(notaAprovação == 0 || isNaN(notaAprovação)){
        alert("Insira Valores Válidos...");
        return;
    }
    const aprovados = candidatos.filter(candidato => candidato.acertos >= notaAprovação); // cria um vetor somente com aqueles que a nota for maior ou igual
    aprovados.sort((a,b) => a.acertos - b.acertos); // coloca em ordem crescente
    aprovados.reverse(); // coloca em ordem decrescente
    let lista = "";
    for(const aprovado of aprovados){
        lista += aprovado.nome + " - " + aprovado.acertos + " acertos\n";
    }
    if(lista == ""){
        resp.innerText = `Não há Alunos aprovados com esse números de acertos: ${notaAprovação}`;
    }
    else{
        resp.innerText = lista;
    }
});