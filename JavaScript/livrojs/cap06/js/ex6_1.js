// cria as referências
const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = []; // declara o vetor global

// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const nome = frm.inPaciente.value; // obtém o nome
    pacientes.push(nome); // adiciona o nome no final do vetor
    let lista = ""; // declara a variável que vai acumular a lista
    for(let i = 0; i < pacientes.length; i++){
        lista = lista + (i + 1) + ". " + pacientes[i] + "\n";
    }
    respLista.innerText = lista; // exibe a lista
    frm.inPaciente.value = ""; // limpa o campo
    frm.inPaciente.focus(); // posiciona o cursor no campo
});


// cria outro ouvinte de evento do botão urgência
frm.btUrgencia.addEventListener("click", () =>{
    // verifica se as validações do form estão ok(no caso, se o campo do paciente está preenchido(is required))
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caráter de urgência");
        frm.inPaciente.focus(); // posiciona o cursor no campo
        return; // volta para o início
    }
    const nome = frm.inPaciente.value; // obtém de novo
    pacientes.unshift(nome); // adiciona o paciente no início do vetor
    let lista = ""; // declara a variável que vai acumular a lista
    pacientes.forEach((paciente, i) =>{
        lista += `${i + 1}. ${paciente}\n`;
    });
    respLista.innerText = lista; // exibe a lista e reeposiciona os nomes
    frm.inPaciente.value = ""; // limpa o campo
    frm.inPaciente.focus(); // posiciona o cursor no campo

});

// cria um ouvinte de evento para o botão atender
frm.btAtender.addEventListener("click", () =>{
    if(pacientes.length == 0){ // verifica se a lista não está vazia
        alert("Não há pacientes na lista de espera");
        frm.inPaciente.focus(); // posiciona o cursor
        return; // volta no início
    }
    const emAtendimento = pacientes.shift(); // remove o primeiro e atribui a uma variável
    let lista = ""; // variável que vai acumular
    pacientes.forEach((paciente, i) =>{
        lista += `${i + 1}. ${paciente}\n`;''
    });
    respNome.innerText = `Em Atendimento: ${emAtendimento}`; // adiciona o paciente para o atendimento
    respLista.innerText = lista; // exibe os pacientes
    frm.inPaciente.value = ""; // limpa o campo
    frm.inPaciente.focus(); // posiciona o cursor 
});