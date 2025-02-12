const prompt = require("prompt-sync")();
const numParcelas = Number(prompt("Quantas Parcelas: "));
const data = new Date();
for(let i = 0; i < numParcelas; i++){
    data.setMonth(data.getMonth() + 1)
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const diaZero = dia < 10 ? "0" + dia : dia;
    const mesZero = mes < 10 ? "0" + mes : mes;
    console.log(`${i + 1} Parcela: ${diaZero}/${mesZero}/${ano}`);
}

/*
i <= numParcelas e i++ i <= 6
i = 0 /i = 1 /i = 2 /i = 3 /i = 4 /i = 5 /i =6
dia = 1 tipo: Number
mes = 0 + 1 + i tipo: Number P: mes = 1 S: mes = 2 T: mes = 3 Q: mes = 4 Q: mes = 5 ... mes = 7
ano = 2025 tipo: Number

let diaZero; * tipo: String
if(dia < 10){
    diaZero = "0" + dia
}
else{
    diaZero = dia;
}

let mesZero; * tipo: String
if(mes < 10){
    mesZero = "0" + mes;
}
else{
    mesZero = mes;
}
diaZero/mesZero/ano => 01/01/2025 repete 7 vezes
i + 1 => 1 - 2 - 3 - 4 - 5 - 6 - 7
         0   1   2   3   4   5   6
*/
