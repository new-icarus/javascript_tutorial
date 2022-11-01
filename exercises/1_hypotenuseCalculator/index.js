let a;
let b;
let c;

document.getElementById("calcular").onclick = function () {

    a = document.getElementById("a").value;
    b = document.getElementById("b").value;

    a = Number(a);
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("resultado").innerHTML = `Lado C: ${c}`;
};