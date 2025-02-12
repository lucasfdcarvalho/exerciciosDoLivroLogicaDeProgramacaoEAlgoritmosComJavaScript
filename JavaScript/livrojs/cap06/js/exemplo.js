/*const amigos = [{nome: "Ana", idade: 20},{nome: "Bruno", idade: 17},{nome: "Cátia", idade: 25}];
const amigos2 = amigos.map(aux => ({nome: aux.nome, nasc: 2022 - aux.idade}));
for(const amigo of  amigos2){
    console.log(`${amigo.nome} - Nasceu em: ${amigo.nasc}`);
} */



/* const numeros = [2, 5, 7, 9, 14, 18];
const par = numeros.filter(num => num % 2 == 0);
console.log(par.join(",")); */

/*const amigos = [{nome: "Ana", idade: 20},{nome: "Bruno", idade: 17},{nome: "Cátia", idade: 25}];
const amigos2 = amigos.filter(aux => aux.idade >= 21 || aux.nome.includes("B"));
for(const amigo of amigos2){
    console.log(amigo.nome + " - " + amigo.idade);
}*/

/*const numeros = [1,2,3,4,5,6];
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(`Soma: ${soma}`);*/

/*const amigos = [{nome: "Ana", idade: 20},{nome: "Bruno", idade: 17},{nome: "Cátia", idade: 25}];
const soma = amigos.reduce((acumulador, amigo) => acumulador + amigo.idade, 0);
const juntaNomes = amigos.reduce((acumulador, amigo) => acumulador + amigo.nome + ", ", "");
console.log(`Soma: ${soma}`);
console.log(`Todos: ${juntaNomes}`); */

/*const numeros = [2, 5, 10, 13, 25, 3, 8];
const maior = numeros.reduce((a, b) => Math.max(a, b), 0);
console.log(`Maior: ${maior}`);*/


/*//const carro = {modelo: "Corsa", preco: 59500};
const carro2 = {...carro, ano: 2020};
console.log(carro2); */
