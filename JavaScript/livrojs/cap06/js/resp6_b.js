// cria as referências 
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

const numeros = []; // vetor global

// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const num = Number(frm.inNumero.value); // obtém o número
    if(numeros.includes(num)){ // se o número já está no vetor
        alert(`Insira outro Número! Você já adicionou o ${num}`); // exibe a mensagem
        frm.reset(); // limpa o campo
        return; // e retorna
    }
    numeros.push(num); // adiciona o número no vetor
    resp1.innerText = `Números: ${numeros.join(", ")}`; // exibe a resposta dos números
    resp2.innerText = ""; // limpa a resposta de verificação
    frm.reset(); // limpa o campo
    frm.inNumero.focus(); // focaliza no campo
});

frm.btVerificar.addEventListener("click", () =>{
    if(numeros.length == 0){ // se o vetor estiver vazio
        alert("Não há números para Verificar! Por Favor Insira um Número"); // exibe uma mensagem
        return; // retorna
    }
    let flag = true; // variável flag
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > numeros[i + 1]){ // se o número anterior for maior que o seu posterior
            flag = false; // muda a flag
            break; // sai do loop
        }
    }
    // operador ternário. Se o flag == true, exibe a primeria mensagem. Senão, exibe a segunda mensagem
    const verificacao = flag ? "OK! Números estão em ordem crescente" : "Atenção... Números não estão em ordem crescente";
    resp2.innerText = verificacao; // exibe a verificação
});