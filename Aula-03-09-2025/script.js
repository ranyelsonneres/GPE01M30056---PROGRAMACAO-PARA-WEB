//definir os valores dos combustiveis
const precoGasolina = 6.17;
const precoEtanol = 4.35;
const precoDiesel = 5.60;

//função
function atualizaValor(){
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);
    let litros = parseFloat(document.getElementById("litros").value);
    let precoPorLitro;

    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
    }
    console.log(precoPorLitro);
    calculaValorAbastecimento(precoPorLitro, litros);

}

let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizaValor);

function calculaValorAbastecimento(precoCombustivel, litros){
    let valorTotal = precoCombustivel * litros;
    //document.getElementById("resultado").textContent = valorTotal;

    if(litros <=0 || isNaN(litros)){
        document.getElementById("resultado").textContent = "Insira um valor válido";
    }else {
         document.getElementById("resultado").textContent = `Valor: ${formatarMoeda(valorTotal)}`;
    }

}

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizaValor);

function formatarMoeda(valor){
    return "R$ " + valor.toLocaleString("pt-br", {minimumFractionDigits: 2, maximumFractionDigits: 2});
}
