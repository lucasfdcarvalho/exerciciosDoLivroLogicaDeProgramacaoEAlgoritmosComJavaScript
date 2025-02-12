// cria as referências
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outDesconto");
const resp2 = document.querySelector("#outResp");

frm.rbSim.addEventListener("click", () =>{
    frm.inConvenio.disabled = false;
});

frm.rbNao.addEventListener("click", () =>{
    frm.inConvenio.disabled = true;
});

// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const valor = Number(frm.inValor.value);
    let desconto;
    if(frm.rbSim.checked){
        const num = frm.inConvenio.selectedIndex;
        if(num == 0){
            desconto = 0.2;
        }
        else{
            desconto = 0.5;
        }

    }
    else{
        desconto = 0.1;
    }
    const calculo = calcularDesconto(valor, desconto);
    const total = valor - calculo;

    resp1.innerText = `Desconto R$: ${calculo.toFixed(2)}`;
    resp2.innerText = `A Pagar R$: ${total.toFixed(2)}`;

});

const calcularDesconto = (valor, desconto) =>{
    return valor * desconto;
}