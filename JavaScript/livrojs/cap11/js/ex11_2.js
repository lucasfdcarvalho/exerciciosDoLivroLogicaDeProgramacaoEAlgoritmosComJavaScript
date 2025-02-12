const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco")

const POLTRONAS = 240; // o número de poltronas

const reservadas = []; // vetor global com as poltronas reservadas

window.addEventListener("load", () =>{
    const ocupadas = localStorage.getItem("teatroOcupadas")? localStorage.getItem("teatroOcupadas").split(";") : [];

    for(let i = 1; i <= POLTRONAS; i++){
        const figure = document.createElement("figure");
        const imgStatus = document.createElement("img");

        imgStatus.src = ocupadas.includes(i.toString())? "img/ocupada.jpg": "img/disponivel.jpg";
        imgStatus.className = "poltrona";

        const figureCap = document.createElement("figcaption");

        const zeros = i < 10? "00" : i < 100? "0" : "";

        const num = document.createTextNode(`[${zeros}${i}]`);

        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        if(i % 24 == 12){
            figure.style.marginRight = "60px";
        }

        dvPalco.appendChild(figure);

        if(i % 24 == 0){
            dvPalco.appendChild(document.createElement("br"));
        }
    }
});

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const poltrona = Number(frm.inPoltrona.value);

    if(poltrona > POLTRONAS){
        alert("Insira uma Poltrona Válida");
        frm.inPoltrona.focus();
        return;
    }

    const ocupadas = localStorage.getItem("teatroOcupadas")? localStorage.getItem("teatroOcupadas").split(";") : [];

    if(ocupadas.includes(poltrona.toString())){
        alert("Poltrona Já Ocupada! Tente Outra Poltrona");
        frm.inPoltrona.value = "";
        frm.inPoltrona.focus();
        return;
    }

    if(reservadas.includes(poltrona)){
        alert("Poltrona Já Reservada");
        frm.inPoltrona.value = "";
        frm.inPoltrona.focus();
        return;
    }

    reservadas.push(poltrona);

    const Poltrona = dvPalco.querySelectorAll("img");
    const imgPoltrona = Poltrona[poltrona - 1];

    imgPoltrona.src = "img/reservada.jpg";

    frm.inPoltrona.value = "";
    frm.inPoltrona.focus();
});

frm.btConfirmar.addEventListener("click", () =>{
    if(reservadas.length == 0){
        alert("Nenhuma Poltrona Reservada");
        frm.inPoltrona.focus();
    }

    const ocupadas = localStorage.getItem("teatroOcupadas")? localStorage.getItem("teatroOcupadas").split(";") : [];

    for(let i = reservadas.length - 1; i >= 0; i--){
        ocupadas.push(reservadas[i]);

        const imgPoltrona = dvPalco.querySelectorAll("img")[reservadas[i] - 1];

        imgPoltrona.src = "img/ocupada.jpg";

        reservadas.pop();

        localStorage.setItem("teatroOcupadas", ocupadas.join(";"));
    }
});