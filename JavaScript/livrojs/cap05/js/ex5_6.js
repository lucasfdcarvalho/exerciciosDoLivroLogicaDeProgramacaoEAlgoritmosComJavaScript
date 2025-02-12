// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("h3");


// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const num = Number(frm.inNumero.value); // obtém o valor
    let temDivisor = 0; // declara e inicializa a variável tipo flag
    for(let i = 2; i <= num / 2; i++){
        if(num % i == 0){ // se tem um divisor
            temDivisor = 1; // muda o flag
            break;
        }
    }
    if(num > 1 && !temDivisor){ // se num > 1 e não possui divisor
        resp.innerText = `${num} É primo`;
    }
    else{
        resp.innerText = `${num} Não é primo`;
    }
});