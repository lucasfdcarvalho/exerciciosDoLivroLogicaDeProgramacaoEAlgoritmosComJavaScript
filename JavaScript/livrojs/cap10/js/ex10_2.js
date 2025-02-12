const frm = document.querySelector("form");
const dvMoedas = document.querySelector("#divMoedas");

const criarMoedas = (num, moeda, textoAlt, classe) =>{
    for(let i = 1; i <= num; i++){
        const novaMoeda = document.createElement("img");
        novaMoeda.src = "img/" + moeda;
        novaMoeda.alt = textoAlt;
        novaMoeda.className = classe;
        dvMoedas.appendChild(novaMoeda);
    }

    const br = document.createElement("br");
    dvMoedas.appendChild(br);
}

window.addEventListener("load", () =>{
    const num1_00 = Math.ceil(Math.random() * 5);
    const num0_50 = Math.ceil(Math.random() * 5);
    const num0_25 = Math.ceil(Math.random() * 5);
    const num0_10 = Math.ceil(Math.random() * 5);

    const alt1_00 = "Moedas de um real";
    const alt0_50 = "Moedas de Cinquenta Centavos";
    const alt0_25 = "Moedas de Vinte e Cinco Centavos";
    const alt0_10 = "Moedas de Dez Centavos";

    criarMoedas(num1_00, "1_00.jpg", alt1_00, "moeda1-00");
    criarMoedas(num0_50, "0_50.jpg", alt0_50, "moeda0-50");
    criarMoedas(num0_25, "0_25.jpg", alt0_25, "moeda0-25");
    criarMoedas(num0_10, "0_10.jpg", alt0_10, "moeda0-10");
});

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const soma = Number(frm.inSoma.value);
    /*
    const moeda1_00 = document.querySelectorAll(".moeda1-00");
    const moeda0_50 = document.querySelectorAll(".moeda0-50");
    const moeda0_25 = document.querySelectorAll(".moeda0-25");
    const moeda0_10 = document.querySelectorAll(".moeda0-10");

    const totalMoeda1 = moeda1_00.length;
    const totalMoeda0_50 = moeda0_50.length * 0.50;
    const totalMoeda0_25 = moeda0_25.length * 0.25;
    const totalMoeda0_10 = moeda0_10.length * 0.10;
    const total = totalMoeda0_10 + totalMoeda0_25 + totalMoeda0_50 + totalMoeda1;
    */

    const moedas = dvMoedas.querySelectorAll("img");
    let totalMoedas = 0;
    for(const moeda of moedas){
        if(moeda.className == "moeda1-00"){
            totalMoedas += 1;
        }
        else if(moeda.className == "moeda0-50"){
            totalMoedas += 0.5;
        }
        else if(moeda.className == "moeda0-25"){
            totalMoedas += 0.25;
        }
        else{
            totalMoedas += 0.1;
        }
    }

    const div = document.createElement("div");
    const h3 = document.createElement("h3");

    let mensagem;
    if(soma == totalMoedas.toFixed(2)){
        div.className = "alert alert-success";
        mensagem = "Parabéns! Você Acertou!";
    }
    else{
        div.className = "alert alert-danger";
        mensagem = `Ops... A resposta correta é ${totalMoedas.toFixed(2)}`;
    }

    const texto = document.createTextNode(mensagem);
    h3.appendChild(texto);
    div.appendChild(h3);
    dvMoedas.appendChild(div);

    frm.submit.disabled = true;
})


frm.addEventListener("reset", () =>{
    location.reload();
});