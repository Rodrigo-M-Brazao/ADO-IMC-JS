let peso = parseFloat(prompt("Digite seu peso: "));
let altura = parseFloat(prompt("Digite sua altura: "));
let imc = peso/(altura * altura);
alert(`Seu imc é ${imc}`);