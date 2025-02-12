// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    const numero = frm.inNumero.value; // obtém o número
    const categoria = numero % 2 == 0 ? resp.innerText = `${numero} é par` : resp.innerText = `${numero} é ímpar`; // operador ternário
    /*
    let categoria;
    if(numero % 2 == 0){
        categoria = `${numero} é par`;
    }
    else{
        categoria = `${numero} é ímpar`;
    }
        
    resp.innerText = categoria;
    */
    
});