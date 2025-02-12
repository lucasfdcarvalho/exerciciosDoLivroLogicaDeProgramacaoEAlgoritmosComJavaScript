// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const criancas = []; // vetor global

// cria um ouvinte de evento para o botão submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    const nome = frm.inNome.value; // obtém os dados
    const idade = Number(frm.inIdade.value);
    criancas.push({nome, idade});
    frm.reset(); // limpa os campos
    frm.inNome.focus(); // posiciona o cursor no campo
    frm.btListar.dispatchEvent(new Event("click")); // dispara o evento de clicar no botão de listar
});

frm.btListar.addEventListener("click", () => {
    if(criancas.length == 0){ // se o vetor crianças estiver vazio
        alert("Não há crianças na lista"); // exibe uma mensagem
        return; // e retorna
    }
    let lista = ""; // variável para concatenar
    for(const crianca of criancas){
        const {nome, idade} = crianca; // desmonta o vetor em nome e idade
        lista += nome + " - " + idade + " anos\n";
    }
   resp.innerText = lista; // exibe a lista 
});

frm.btResumir.addEventListener("click", () => {
    if(criancas.length == 0){ // se o vetor crianças estiver vazio
        alert("Não há crianças na lista"); // exibe uma mensagem
        return; // e retorna
    }
    const copia = criancas.slice(); // cria uma cópia do vetor crianças, ou, const copia = [...criancas];(operador Spread)
    copia.sort((a,b) => a.idade - b.idade); // ordena as idades em ordem crescente
    let aux = copia[0].idade; // toma como referência a menor idade
    let resultado = ""; // variável que vai concatenar as respostas
    let nomes = []; // vetor que irá conter os nomes das crianças de cada idade
    for(const crianca of copia){
        const {nome, idade} = crianca; // desmonta o vetor em nome e idade
        if(idade == aux){ // se a idade for igual a idade auxiliar 
            nomes.push(nome); // adiciona o nome da criança no vetor de nomes
        }
        else{ // senão montamos o resultado
            resultado += aux + " ano(s): " + nomes.length + " criança(s) - " + ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
            resultado += `(${nomes.join(", ")})\n`; // exibe os nomes das crianças com uma vírgula separando-os
            aux = idade; // muda a idade auxiliar para a idade atual
            nomes = []; // limpa o vetor de nomes
            nomes.push(nome); // adiciona o primeiro nome da nova idade
        }
    }
    // adiciona a última criança 
    resultado += aux + " ano(s): " + nomes.length + " criança(s) - " + ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
    resultado += `(${nomes.join(", ")})\n`;
    resp.innerText = resultado;
});