// cria as referências
const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = []; // declara um vetor global
const sorteado = Math.floor(Math.random() * 100) + 1; // gera um número aleatório entre 1 e 100
const CHANCES = 6; // número de chances

// cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // evita o envio do form
    const num = Number(frm.inNumero.value); // obtém o número
    if(num == sorteado){
        respDica.innerText = `Parabéns!! Número sorteado: ${num}`;
        frm.btSubmit.disabled = true; // deastiva o botão de submit
        frm.btNovo.className = "exibe"; // exibe o botão de tentar novamente
    }
    else{
        if(erros.includes(num)){ // se o vetor de erros inclui o número
            alert(`Você já apostou o número ${num}. Tente outro...`); // exibe uma caixa de alerta
            return;
            // frm.inNumero.value = "";
            // frm.inNumero.focus();
        }
        else{
            erros.push(num); // adiciona o número no vetor de erros
            const numErros = erros.length; // a quantidade de elementos presentes
            const numChances = CHANCES - numErros; // calcula a quantidade de chances de acordo com o número de erro
            respErros.innerText = `${numErros} (${erros.join(", ")})`; // exibe a quantidade de erros e os números errados
            respChances.innerText = numChances; // exibe a quantidade de chances

            if(numChances == 0){ // se o número de chances for igual a 0
                alert("Suas chances acabaram...");
                frm.btSubmit.disabled = true; // desativa o botão de submit
                frm.btNovo.className = "exibe"; // exibe o botão de tentar novamente
                respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`; // exibe o número sorteado
            }
            else{
                let dica
                if(num < sorteado){ // se o número for menor
                    dica = "Maior"; // a dica vai falar para colocar um número maior
                }
                else{ // senão
                    dica = "Menor"; // dica é menor
                }
                respDica.innerText = `Dica: Tente um número ${dica} que ${num}`; // exibe a dica
            }

        }
    }
    frm.inNumero.value = ""; // limpar o campo
    frm.inNumero.focus(); // posiciona o cursor no campo

    frm.btNovo.addEventListener("click", () =>{
        location.reload(); // recarrega a página
    });
});