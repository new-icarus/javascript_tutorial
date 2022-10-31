// const

//variable that can't be changed

const pi = Math.PI;
let raio;

document.getElementById('calcular').onclick = function () {
    raio = document.getElementById('raio').value;
    document.getElementById('p1').innerHTML = `o comprimento da circunferência de raio ${raio} é ${(2 * pi * raio).toFixed(3)}.`;
}