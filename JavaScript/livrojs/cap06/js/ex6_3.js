// cria as referências 
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const carros = [];

// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const modelo = frm.inModelo.value; // obtém os dados
    const preco = Number(frm.inPreco.value);
    carros.push({modelo: modelo, preco: preco}); // ou carros.push({modelo, preco});
    frm.inModelo.value = "";
    frm.inPreco.value = "";
    inModelo.focus();
    frm.btListar.dispatchEvent(new Event("click")); // dispara um envento
});

frm.btListar.addEventListener("click", () =>{
    if(carros.length == 0){
        alert("Não há carros na lista");
    }
    const lista = carros.reduce((acumulador, carro) => acumulador + carro.modelo + " - " + carro.preco.toFixed(2) + "\n", "");
    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`;
    /*const listar = carros.map(aux => ({modelo: aux.modelo, preco: aux.preco}));
    let lista = "";
    for(const carro of listar){
        lista = lista + carro.modelo + " - " + "R$: " + carro.preco + "\n"
    }
    console.log("Lista dos Carros Cadastrados");
    console.log("-".repeat(31));
    resp.innerText = lista;*/
});

frm.btFiltrar.addEventListener("click", () =>{
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar: "));
    if(maximo == 0 || isNaN(maximo)){
        return;
    }
    const filtro = carros.filter(aux => aux.preco <= maximo);
    if(filtro.length == 0){
        alert("Não há carros com preço inferior ou igual ao solicitado");
        return;
    }
    let lista = "";
    for(const carro of filtro){ // ou const lista = filtro.reduce((acumulador, carro) => acumulador + carro.modelo + " - " + carro.preco.toFixed(2) + "\n", "");
        lista = lista + carro.modelo + " - " + "R$: " + carro.preco.toFixed(2) + "\n";
    }
    resp.innerText = `Carros Até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;
});

frm.btSimular.addEventListener("click", () =>{
    const promocao = Number(prompt("Qual o percentual de desconto: "));
    if(promocao == 0 || isNaN(promocao)){
        return;
    }
    if(carros.length == 0){
        alert("Não há carros para obter o desconto");
        return;
    }   
    const desconto = carros.map(aux => ({modelo: aux.modelo, preco: aux.preco - (aux.preco * promocao / 100)}));
    let lista = "";
    for(const carro of desconto){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros com desconto: ${promocao}\n${"-".repeat(40)}\n${lista}`;
});