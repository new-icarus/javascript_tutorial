let lifePoints = 20;

//player one
document.getElementById("p1-plusFive").onclick = function () {
    lifePoints += 5;
    document.getElementById("p1-lifePoints").innerHTML = lifePoints;
};

document.getElementById("p1-plusOne").onclick = function () {
    lifePoints += 1;
    document.getElementById("p1-lifePoints").innerHTML = lifePoints;
};

document.getElementById("p1-minusOne").onclick = function () {
    lifePoints -= 1;
    document.getElementById("p1-lifePoints").innerHTML = lifePoints;
};

document.getElementById("p1-minusFive").onclick = function () {
    lifePoints -= 5;
    document.getElementById("p1-lifePoints").innerHTML = lifePoints;
};

document.getElementById("p1-reset").onclick = function () {
    lifePoints = 20;
    document.getElementById("p1-lifePoints").innerHTML = lifePoints;
};

//player 2
document.getElementById("p2-plusFive").onclick = function () {
    lifePoints += 5;
    document.getElementById("p2-lifePoints").innerHTML = lifePoints;
};

document.getElementById("p2-plusOne").onclick = function () {
    lifePoints += 1;
    document.getElementById("p2-lifePoints").innerHTML = lifePoints;
};

document.getElementById("p2-minusOne").onclick = function () {
    lifePoints -= 1;
    document.getElementById("p2-lifePoints").innerHTML = lifePoints;
};

document.getElementById("p2-minusFive").onclick = function () {
    lifePoints -= 5;
    document.getElementById("p2-lifePoints").innerHTML = lifePoints;
};

document.getElementById("p2-reset").onclick = function () {
    lifePoints = 20;
    document.getElementById("p2-lifePoints").innerHTML = lifePoints;
};