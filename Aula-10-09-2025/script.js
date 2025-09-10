//função de seta
//sem parâmetros
const saudacao = () => console.log("Olá");
saudacao();

//com parâmetros (apenas um)
const dobrar = numero => numero * 2;
console.log(dobrar(2));

//com parâmetros (mais de um)
const somar = (a, b) => a + b;
console.log(somar(3,4));

//função com mais de uma linha
const cacularArea = (base, altura) => {
    const area = (base * altura) / 2;
    return area;
}
console.log(cacularArea(10, 5));

//função String
let Nome = "CaSa";
let nomeCorrigido = Nome.toLowerCase();
console.log(nomeCorrigido); //casa

//Objetos (POO)
const pessoa = {
    nome: "Fulano",
    idade: 12
}
console.log(pessoa);
console.log(pessoa.nome);

//construtor - utilizando a classe
class Pessoa {
    constructor(nome, idade) {
        //this
        this.nome = nome;
        this.idade = idade;
    }

    //métodos
    retornarNome(){
        return `Nome: ${this.nome}`;
    }
}

const p1 = new Pessoa("Fulano", 12);
const p2 = new Pessoa("Beltrano", 15);
console.log(p1);
console.log(p2);
console.log(p1.retornarNome());
console.log(p2.retornarNome());

//Arrays - armazenar vários valores em uma única variável
let carrinho = []; //array vazio
carrinho.push("panela"); //push - adiciona ao final
carrinho.push("pano");
carrinho.unshift("meia"); //adiciona ao inicio
carrinho.splice(1,0,"camiseta"); //adicionar em posição específica

//remoção
carrinho.pop(); //remove o ultimo elemento
carrinho.shift(); //remove o primeiro elemento
carrinho.splice(0,1); //remover o elemento na posição O

carrinho.push("pano");

console.log(carrinho);
console.log(carrinho.includes("Pano")); //pesquisando um item
