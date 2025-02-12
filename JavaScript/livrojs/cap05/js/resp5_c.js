// cria as referências
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    const num = Number(frm.inNumero.value); // obtém o dado
    let resposta = `Divisores do ${num}: `;
    let soma = 0; // 
    for(let i = 1; i < num; i++){
        if(num % i == 0){
            soma = soma + i;
            if(i == 1){
                resposta = resposta + i;
            }
            else{
                resposta = resposta + ", " + i;
            }
        }
    }
    resp1.innerText = `${resposta} (Soma: ${soma})`;
    if(soma == num){
        resp2.innerText = `${num} É um Número Perfeito`;
    }
    else{
        resp2.innerText = `${num} Não é um Número Perfeito`;
    }
});