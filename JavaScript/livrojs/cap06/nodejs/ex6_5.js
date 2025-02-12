const prompt = require("prompt-sync")(); // adiciona o pacote para a entrada de dados
console.log("Informe os alunos. Após, digite 'Fim' no nome para sair"); // exibe a mensagem
const alunos = []; // declara o vetor dos alunos
do{
    const nome = prompt("Nome: "); // obtém o nome
    if(nome == "Fim"){
        break; // sai do loop
    }
    const nota = Number(prompt("Nota: ")); // obtém a nota
    alunos.push({nome, nota}); // adiciona o nome e a nota do aluno ao vetor
    console.log("Ok! Aluno(a) cadastrado(a)..."); // exibe a mensagem

}while(true)
console.log("-".repeat(40));
//const maior = alunos.reduce((a,b) => Math.max(a, b.nota), 0); // descobre a maior nota
alunos.sort((a,b) => a.nota - b.nota) // ordena as notas em ordem crescente
alunos.reverse(); // inverte
const maior = alunos[0].nota; // maior nota
console.log(`Maior Nota: ${maior}`); // exibe a maior nota
if(maior >= 7){
    const destaques = alunos.filter(aluno => aluno.nota == maior); // filtra os alunos
    for(const destaque of destaques){
        const {nome, idade} = destaque;
        console.log(`- ${nome}`);
    }
}
else{
    console.log("Não há alunos em destaque na turma");
}