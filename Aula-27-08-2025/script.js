let botao1 = document.getElementById("botao1");

//propriedade: clique
botao1.ondblclick = function(){
    console.log("Evento 1");
    //lógica que você quer aplicar ao botão
    botao1.style.backgroundColor = "red";
    botao1.textContent = "Dois cliques";
}
botao1.onclick = function() {
    botao1.textContent = "Um clique";
}

let botao2 = document.getElementById("botao2");
botao2.onmouseover = function(){
    botao2.textContent = "Mudou!";
    botao2.style.backgroundColor = "blue";
}

botao2.onmouseout = function(){
    console.log("Teste");
    botao2.style.backgroundColor = "";
    botao2.textContent = "Não mudou";
}

//capturar uma tecla
let campoEntrada = document.getElementById("input1");
let resultado1 = document.getElementById("resultado1");
campoEntrada.onkeydown = function(event){
    if(event.key == "Enter"){
        console.log("Pressionou a tecla Enter");
        resultado1.innerHTML = campoEntrada.value;
        campoEntrada.value = "";
    }
}

let botao3 = document.getElementById("botao3");
botao3.ondblclick = function(){
    resultado1.textContent = "";
}

//addEventListener
let botao4 = document.getElementById("botao4");
let msg = document.getElementById("msg");
let msg2 = document.getElementById("msg2");
botao4.addEventListener("click", function(){
    msg.textContent = "Evento 1";
});

botao4.addEventListener("click", function(){
    msg2.textContent = "Evento 2";
});
