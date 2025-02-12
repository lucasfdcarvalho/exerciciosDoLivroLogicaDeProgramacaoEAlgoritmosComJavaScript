// cria as referências
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const frase = frm.inFrase.value.trim(); // obtém a frase e tira os espaços inicial e final
    const fraseSemEspacos = frase.replace(/ /g, "").toLowerCase();
    const tam = fraseSemEspacos.length;
    let invertido = "";
    for(let i = 1; i <= tam; i++){
        invertido += fraseSemEspacos.charAt(tam - i);
    }
    if(fraseSemEspacos == invertido){
        resp.innerText = `${frase} é um Palíndromo`;
    }
    else{
        resp.innerText = `${frase} não é um Políndromo`;
    }
});