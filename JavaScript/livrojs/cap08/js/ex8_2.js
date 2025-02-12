// obtém os elementos
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const modelo = frm.inModelo.value; // obtém os dados
    const ano = Number(frm.inAno.value);
    const preco = Number(frm.inPreco.value);
    const classificacao = classificarVeiculo(ano);
    const entrada = calcularEntrada(preco, classificacao);
    const parcela = calcularParcela(preco, entrada);

    resp1.innerText = `${modelo} - ${classificacao}`;
    resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`;
    resp3.innerText = `+10x de R$: ${parcela.toFixed(2)}`;
});

const classificarVeiculo = (ano) =>{
    const anoAtual = new Date().getFullYear();
    let resultado;
    if(ano == anoAtual){
        resultado = "Novo";
    }
    else if(anoAtual - ano == 2 || anoAtual - ano == 1){
        resultado = "Seminovo";
    }
    else{
        resultado = "Usado";
    }
    return resultado;
}

const calcularEntrada = (preco, status) =>{
    if(status == "Novo"){
        return preco * 0.5;
    }
    else{
        return preco * 0.3;
    }
}

const calcularParcela = (preco, entrada) =>{
    return (preco - entrada) / 10;
}