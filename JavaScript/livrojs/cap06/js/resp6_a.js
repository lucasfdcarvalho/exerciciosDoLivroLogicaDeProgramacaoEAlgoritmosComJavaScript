// cria as referências 
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const clubes = []; // vetor global

// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const nomeClube = frm.inClube.value; // obtém o dado
    if(!isNaN(nomeClube)){
        alert("Insira Somente Nomes!");
        frm.reset();
        return;
    }
    clubes.push(nomeClube); // adciona o nome ao vetor
    frm.reset(); // limpa o campo
    frm.inClube.focus(); // posiciona o cursor no campo
    frm.btListar.dispatchEvent(new Event("click")); // dispara o evento de click no botão listar
});

frm.btListar.addEventListener("click", () =>{
    if(clubes.length == 0){
        alert("Não há clubes para ser listados..."); // exibe uma mensagem caso não tenha nenhum clube
        return; // retorna para o início
    }
    let lista = ""; // variável para concatenar
    for(const clube of clubes){
        lista += clube + "\n"; // concatena as respostas
    }
    resp.innerText = lista; // exibe a resposta
});

frm.btTabela.addEventListener("click", () =>{
    if(clubes.length == 0){
        alert("Não há clubes para ser listados..."); // exibe uma mensagem caso não tenha nenhum clube
        return; // retorna para o início
    }
    else{
        if(clubes.length % 2 != 0){ // se a quantidade de clubes for ímpar
            alert("Não há clubes suficientes para montar a tabela!"); // exibe a mensagem
            return; // e retorna para o início
        }
        const copia = clubes.slice(); // cria uma cópia
        copia.reverse(); // reverte o vetor da cópia
        let tabela = ""; // variável para concatenar
        for(let i = 0; i < copia.length / 2; i++){
            tabela += clubes[i] + " x " + copia[i] + "\n"; // monta a tabela
        }
        resp.innerText = tabela;
    }
});