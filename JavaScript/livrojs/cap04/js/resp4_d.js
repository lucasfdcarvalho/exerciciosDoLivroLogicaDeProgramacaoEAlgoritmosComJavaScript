// cria as referências
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    const ladoA = Number(frm.inLadoA.value); // obtém os lados
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);
    // declara as variáveis
    let tipo;
    if(ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB){
        resp1.innerText = "Lados não podem formar um triângulo";
        resp2.innerText = "";
        return;
    }
    if(ladoA == ladoB && ladoB == ladoC){
        tipo = "Equilátero";
    }
    else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
        tipo = "Isóceles";
    }
    else{
        tipo = "Escaleno";
    }
    resp1.innerText = `Lados podem formar um triângulo`; // exibe as respostas
    resp2.innerText = `Tipo: ${tipo}`;
    
});