const { createContext } = require("react");

//variáveis
var animal = 'gato';
console.log(animal);

let nomeCompleto = "Fulano da Silva";
console.log(nomeCompleto);

nomeCompleto = "Ciclano";
console.log(nomeCompleto);

const valor = 10; //constante
console.log(valor);

//valor = 20;
console.log(valor);

//verificar o tipo
console.log(typeof nomeCompleto);
console.log(typeof valor);

//operadores
// + * / -

//operadores de comparação
// = atribuição
// == comparação
console.log(5 == "5"); //igualdade

// === comparação
console.log(5 === "5"); //estritamente igual

//entrada de dados (input)
var nome = window.prompt("Nome: ");
console.log(typeof nome);
document.writeln("Escrevendo no HTML");

//cast de dados
var idade = parseInt(window.prompt("Idade: "));
console.log(typeof idade);

//impressão (template literal)
console.log(`Olá ${nome} você possui ${idade} ano(s)`);

//maior, menor, diferente
//<, <=, >, >=, !=

//estrutura de controle
//condicionais (if-else)
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("menor de idade");
}
//loops (for, while)
for (let i=0; i< 5; i++){
    console.log("Iteração: " + i);
}
//switch-case
var diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    default:
        console.log("Escolha padrão");
}


