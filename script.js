let display = document.getElementById('display');
let operacao = "";

function appendNumero(numero) {
  display.innerText += numero;
}

function appendOperador(operador) {
  operacao += display.innerText + operador;
  display.innerText = "";
}

function calcular() {
  operacao += display.innerText;
  display.innerText = eval(operacao);
  operacao = "";
}

function limpar() {
  display.innerText = "";
  operacao = "";
}