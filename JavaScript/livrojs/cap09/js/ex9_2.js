const imClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");
const inRadios = document.querySelectorAll("input"); // captura tags input da página


const trocarClube = () =>{
    const clubes = ["Brasil", "Pelotas", "Farroupilha"]; // vetor com a lista de clubes

    let selecao;
    // percorre todos os input radio para verificar qual está selecionado
    for(let i = 0; i < inRadios.length; i++){
        if(inRadios[i].checked){
            selecao = i; // se selecionado, armazena o índice do radio selecionado
            break; // sai da repetição
        }
    }

    if(selecao <= 2){ // se seleção for <= 2 significa que torce para um time
        dvTitulo.className = `row cores-${clubes[selecao]}`; // modifica a cor de acordo com o clube
        imClube.src = `img/${clubes[selecao].toLowerCase()}.png`; // modifica a imagem
        imClube.className = "img-fluid"; // muda o estilo para exibir a imagem
        imClube.alt = `Símbolo do ${clubes[selecao]}`; // altera o alt da imagem
        localStorage.setItem("clube", clubes[selecao]); // salva nome do clube
    }
    else{ // se for nenhum
        dvTitulo.className = "row"; // tira a classe de cor de divTitulo
        imClube.className = "d-none"; // oculta a imagem
        imClube.alt = ""; // limpa o texto alternativo
        localStorage.removeItem("clube"); // remove variável do localStorage
    }
}

// percorre os elementos para associar a function ao evento change
for(const inRadio of inRadios){
    inRadio.addEventListener("change", trocarClube);
}

const verificarClube = () =>{
    if(localStorage.getItem("clube")){
        const clube = localStorage.getItem("clube");
        if(clube == "Brasil"){
            inRadios[0].checked = true;
        }
        else if(clube == "Pelotas"){
            inRadios[1].checked = true;
        }
        else{
            inRadios[2].checked = true;
        }
        trocarClube();
    }
}

window.addEventListener("load", verificarClube)
