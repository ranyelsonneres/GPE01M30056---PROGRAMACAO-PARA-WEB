//buscar o elemento na página HTML
let meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent);

let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

//laço de repetição
for (let i=0; i<paragrafo1.length; i++){
    console.log(paragrafo1[i].textContent);
}
console.log(paragrafo1[2].textContent);

let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

//criar um elemento via JavaScript
let destino = document.getElementById("elemento");
let p = document.createElement("p");
p.textContent = "Paragrafo criado via javascript";
destino.append(p);

//criar uma lista
let ul = document.createElement("ul");
let itens = ["Item 1", "Item 2", "Item 3"];
for (let i=0; i<itens.length;i++){
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);
}
destino.append(ul);

//função de somar()
function somar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    console.log(typeof n1);
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    console.log(soma);

    let saida = `<strong>Resultado: </strong> ${soma}`;
    document.getElementById("resultado").innerHTML = saida;
}

//botão
let botao = document.getElementById("botao1");
botao.onclick = function(){
    alert("Clicou!");
    botao.textContent = "Você clicou!";
    botao.style.backgroundColor = "red";
}
